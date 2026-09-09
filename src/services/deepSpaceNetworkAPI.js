import axios from "axios";

// NASA/JPL's public "DSN Now" feed -- the same live XML data source that
// powers https://eyes.nasa.gov/dsn/dsn.html. No API key required, and it
// sends Access-Control-Allow-Origin: * so it can be fetched directly from
// the browser.
const DSN_FEED_URL = "https://eyes.nasa.gov/dsn/data/dsn.xml";
const CACHE_TTL_MS = 20000; // this data changes often, but no need to poll faster than this

let cachedData = null;
let cachedAt = 0;
let inFlightRequest = null;

function attr(node, name, parseAsNumber = false) {
  const value = node.getAttribute(name);
  if (!parseAsNumber) return value;
  return value ? Number(value) : null;
}

function parseSignal(node) {
  return {
    active: node.getAttribute("active") === "true",
    signalType: attr(node, "signalType"),
    dataRate: attr(node, "dataRate", true) || 0,
    band: attr(node, "band"),
    power: attr(node, "power", true),
    spacecraft: attr(node, "spacecraft"),
  };
}

// The feed's XML is flat: <station> elements are section headers, and the
// <dish> elements that belong to them follow as siblings (not children) up
// until the next <station> tag -- so parsing means walking children in
// order and tracking which station we're currently under.
function parseDsnXml(xmlText) {
  const doc = new DOMParser().parseFromString(xmlText, "text/xml");
  const root = doc.querySelector("dsn");
  if (!root) {
    throw new Error("Unexpected DSN feed format");
  }

  const stations = [];
  let currentStation = null;

  for (const node of root.children) {
    if (node.tagName === "station") {
      currentStation = {
        name: attr(node, "name"),
        friendlyName: attr(node, "friendlyName"),
        timeUTC: attr(node, "timeUTC", true),
        dishes: [],
      };
      stations.push(currentStation);
    } else if (node.tagName === "dish" && currentStation) {
      const dish = {
        name: attr(node, "name"),
        azimuthAngle: attr(node, "azimuthAngle", true),
        elevationAngle: attr(node, "elevationAngle", true),
        activity: attr(node, "activity"),
        upSignals: [],
        downSignals: [],
        targets: [],
      };

      for (const child of node.children) {
        if (child.tagName === "upSignal") {
          dish.upSignals.push(parseSignal(child));
        } else if (child.tagName === "downSignal") {
          dish.downSignals.push(parseSignal(child));
        } else if (child.tagName === "target") {
          dish.targets.push({
            name: attr(child, "name"),
            downlegRangeKm: attr(child, "downlegRange", true),
            rtltSeconds: attr(child, "rtlt", true),
          });
        }
      }

      currentStation.dishes.push(dish);
    }
  }

  const timestampNode = root.querySelector("timestamp");
  const timestamp = timestampNode ? Number(timestampNode.textContent) : Date.now();

  return { stations, timestamp };
}

export const deepSpaceNetworkData = async () => {
  const isFresh = cachedData && Date.now() - cachedAt < CACHE_TTL_MS;
  if (isFresh) {
    return cachedData;
  }
  if (inFlightRequest) {
    return inFlightRequest;
  }

  inFlightRequest = axios
    .get(DSN_FEED_URL, { responseType: "text" })
    .then((response) => {
      cachedData = parseDsnXml(response.data);
      cachedAt = Date.now();
      return cachedData;
    })
    .catch((err) => {
      console.error(`Something went wrong fetching the Deep Space Network data: ${err}`);
      throw err;
    })
    .finally(() => {
      inFlightRequest = null;
    });

  return inFlightRequest;
};
