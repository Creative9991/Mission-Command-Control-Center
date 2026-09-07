import axios from "axios";

const TIANGONG_API_URL = "http://localhost:3100/chineseTiangong";
const CACHE_TTL_MS = 30000; // don't hit our backend (and its N2YO quota) more than once per 30s

let cachedData = null;
let cachedAt = 0;
let inFlightRequest = null;

export const chineseTiangongApi = async () => {
  const isFresh = cachedData && Date.now() - cachedAt < CACHE_TTL_MS;
  if (isFresh) {
    return cachedData;
  }
  if (inFlightRequest) {
    // A fetch is already in progress (e.g. two components mounted at once) —
    // share it instead of firing a second request.
    return inFlightRequest;
  }

  inFlightRequest = axios
    .get(TIANGONG_API_URL)
    .then((response) => {
      cachedData = response.data;
      cachedAt = Date.now();
      return cachedData;
    })
    .catch((err) => {
      console.error(`Something went wrong fetching the Tiangong data: ${err}`);
      throw err;
    })
    .finally(() => {
      inFlightRequest = null;
    });

  return inFlightRequest;
};
