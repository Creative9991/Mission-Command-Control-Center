import axios from "axios";

// US Naval Observatory's public astronomical data API -- official, no API key
// required, CORS-open. https://aa.usno.navy.mil/data/api
const USNO_BASE = "https://aa.usno.navy.mil/api";

// The Space Devs' Launch Library 2 -- free public spaceflight data, no key
// required for this volume of use. https://thespacedevs.com/llapi
const LL2_BASE = "https://ll.thespacedevs.com/2.2.0";

// Reference site for rise/set/illumination -- Kennedy Space Center, FL, the
// launch site for most US lunar missions.
const REFERENCE_COORDS = "28.5,-80.6";
const REFERENCE_TZ = -4; // America/New_York

// Neither phase nor launch schedule data changes minute to minute, so an
// hour-long cache (+ in-flight de-dupe, same pattern as the other trackers)
// is plenty and keeps us well within Launch Library's free-tier rate limit.
const CACHE_TTL_MS = 60 * 60 * 1000;

let phaseCache = null;
let phaseCachedAt = 0;
let phaseInFlight = null;

let missionsCache = null;
let missionsCachedAt = 0;
let missionsInFlight = null;

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

export const getMoonPhaseData = async () => {
  const isFresh = phaseCache && Date.now() - phaseCachedAt < CACHE_TTL_MS;
  if (isFresh) {
    return phaseCache;
  }
  if (phaseInFlight) {
    return phaseInFlight;
  }

  phaseInFlight = Promise.all([
    axios.get(`${USNO_BASE}/rstt/oneday`, {
      params: { date: todayISO(), coords: REFERENCE_COORDS, tz: REFERENCE_TZ },
    }),
    axios.get(`${USNO_BASE}/moon/phases/date`, {
      params: { date: todayISO(), nump: 4 },
    }),
  ])
    .then(([dayRes, phasesRes]) => {
      phaseCache = {
        today: dayRes.data.properties.data,
        upcomingPhases: phasesRes.data.phasedata,
      };
      phaseCachedAt = Date.now();
      return phaseCache;
    })
    .catch((err) => {
      console.error(`Something went wrong fetching Moon phase data: ${err}`);
      throw err;
    })
    .finally(() => {
      phaseInFlight = null;
    });

  return phaseInFlight;
};

export const getUpcomingLunarMissions = async () => {
  const isFresh = missionsCache && Date.now() - missionsCachedAt < CACHE_TTL_MS;
  if (isFresh) {
    return missionsCache;
  }
  if (missionsInFlight) {
    return missionsInFlight;
  }

  missionsInFlight = axios
    .get(`${LL2_BASE}/launch/upcoming/`, {
      params: { search: "lunar", limit: 8 },
    })
    .then((response) => {
      missionsCache = response.data.results.map((launch) => ({
        id: launch.id,
        name: launch.name,
        provider: launch.launch_service_provider?.name,
        date: launch.net,
        status: launch.status?.name,
        orbit: launch.mission?.orbit?.name,
        description: launch.mission?.description,
      }));
      missionsCachedAt = Date.now();
      return missionsCache;
    })
    .catch((err) => {
      console.error(`Something went wrong fetching upcoming lunar missions: ${err}`);
      throw err;
    })
    .finally(() => {
      missionsInFlight = null;
    });

  return missionsInFlight;
};
