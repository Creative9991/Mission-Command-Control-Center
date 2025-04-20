import axios from "axios";

export let images = [];

export const s3Images = async () => {
  if (images.length) {
    return images;
  }
  try {
    const response = await axios.get(`http://localhost:3100/api/images`);
    images = response.data;
    console.log("---------> Images", images);
    return images;
  } catch (err) {
    console.error(
      `Something went wrong fetching the s3 bucket images data: ${err}`
    );
    throw err;
  }
};
