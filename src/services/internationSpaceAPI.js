import axios from 'axios';

export let issData = [];

export const issDataList = async () => {
    if (issData.length) {
        return issData;
    }
    try {
      const response = await axios.get(
        `http://api.open-notify.org/iss-now.json`,
      );
        issData = response.data;
        return issData;
    } catch (err) {
      console.error(`Something went wrong fetching the nasaData data: ${err}`);
      throw err;
    }
  };