import axios from "axios";

const { REACT_APP_NASA_API_KEY } = process.env;

export let agencyData = [];
export let nasaData = [];
export let allPost = [];

export const nasaDataList = async () => {
  if (nasaData.length) {
    return nasaData;
  }
  try {
    const response = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${REACT_APP_NASA_API_KEY}`
    );
    nasaData = response.data;
    return nasaData;
  } catch (err) {
    console.error(`Something went wrong fetching the nasaData data: ${err}`);
    throw err;
  }
};

export const agencyDataList = async (id) => {
  if (agencyData.length) {
    return agencyData;
  }
  try {
    const response = await axios.get(`http://localhost:3100/spacecrafts`);
    agencyData = response.data;
    return agencyData;
  } catch (err) {
    console.error(`Something went wrong fetching the nasaData data: ${err}`);
    throw err;
  }
};

export const allPosts = async () => {
  if (allPost.length) {
    return allPost;
  }
  try {
    const response = await axios.get(`http://localhost:3100/posts`);
    allPost = response.data;
    return allPost;
  } catch (err) {
    console.error(`Something went wrong fetching the nasaData data: ${err}`);
    throw err;
  }
};
