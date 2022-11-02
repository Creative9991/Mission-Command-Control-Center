import axios from 'axios';
import {
PERSONS_LIST_PATH 
} from '../constants/constants.js';


const { REACT_APP_API_URL } = process.env;

export let persons = [];
export let agencies = [];
export let agenciesId;
export let satellites = [];
//const id;
export const PersonsList = async () => {
    if (persons.length) {
        return persons;
    }
    try {
      const response = await axios.get(
        `${PERSONS_LIST_PATH }`,
      );
        persons = response.data;
        //console.log(persons);
        return persons;
    } catch (err) {
      console.error(`Something went wrong fetching the persons data: ${err}`);
      throw err;
    }
  };
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

// export const SateliiteList = async () => {
//   try {
//       const response = await axios.get(
//           `${satellite_DETAILS }`,
//       );
//       satellites = response.data;
//       //console.log(satellites);
//       return satellites;
//   } catch (err) {
//       console.error(`Something went wrong fetching the satellites data: ${err}`);
//       throw err;
//   }
// };


//API call for each individual space agency page : 


// export const isroSatellite = async() => {
//   try{
//     const isroReponse = await axios.get(
//       `${ISRO_API}`,
//     );
//       isroRes = isroResponse.data;
//       console.log(response);
//       return isroRes;
//   }catch (err) {
//     console.error(`Something went wrong fetching the Agencies data: ${err}`);
//     throw err;
// }
// };


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




