import axios from "axios";
export let chineseTiangong = [];
export const chineseTiangongApi = async () => {
  if (chineseTiangong.length) {
    return chineseTiangong;
  }
  try {
    const response = await axios.get(`http://localhost:3100/chineseTiangong`);
    chineseTiangong = response.data;
    return chineseTiangong;
  } catch (err) {
    console.error(`Something went wrong fetching the nasaData data: ${err}`);
    throw err;
  }
};
