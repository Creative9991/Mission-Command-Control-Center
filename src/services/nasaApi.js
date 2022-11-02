import axios from 'axios';

const { REACT_APP_NASA_API_KEY } = process.env;


export let nasaData = [];

export const nasaDataList = async () => {
    if (nasaData.length) {
        return nasaData;
    }
    try {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${REACT_APP_NASA_API_KEY}`,
      );
        nasaData = response.data;
        return nasaData;
    } catch (err) {
      console.error(`Something went wrong fetching the nasaData data: ${err}`);
      throw err;
    }
  };