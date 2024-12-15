import axios from "axios";

export let spacexDataInfo = [];

export const spacexData = async () => {
  if (spacexDataInfo.length) {
    return spacexDataInfo;
  }
  try {
    const response = await axios.get(
      `https://api.spacexdata.com/v5/launches/latest`
    );
    spacexDataInfo = response.data;
    return spacexDataInfo;
  } catch (err) {
    console.error(`Something went wrong fetching the nasaData data: ${err}`);
    throw err;
  }
};
