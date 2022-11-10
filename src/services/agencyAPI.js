import axios from 'axios';


const { REACT_APP_API_URL } = process.env;

export let agencies = [];
export let agenciesId;
export let satellites = [];

export const AgencyList = async () => {
    if (agencies.length) {
        return agencies;
    }
    try {
        const response = await axios.get(
            `${REACT_APP_API_URL }`,
        );
        agencies = response.data;
        console.log(response);
        return agencies;
    } catch (err) {
        console.error(`Something went wrong fetching the Agencies data: ${err}`);
        throw err;
    }
};


export const AgencyListId = async id => {
  try {
      const agencyResponse = await axios.get(
        `${REACT_APP_API_URL}${id}`
      );
      agenciesId = agencyResponse.data;
      console.log(agencyResponse);
      return agenciesId;
  } catch (err) {
      console.error(`Something went wrong fetching the space agency pages: ${err}`);
      throw err;
  }
};




