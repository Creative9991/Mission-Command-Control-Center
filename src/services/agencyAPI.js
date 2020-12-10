import axios from 'axios';
import {
PERSONS_LIST_PATH 
} from '../constants/constants.js';

import {AGENCY_DETAILS} from '../constants/constants.js';
import {satellite_DETAILS} from '../constants/constants.js';

export let persons = [];
export let agencies = [];
export let agenciesId;
export let satellites = [];
//const id;
export const PersonsList = async () => {
    if (persons.length) {
        //console.log(persons);
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
        //console.log(agencies);
        return agencies;
    }
    try {
        const response = await axios.get(
            `${AGENCY_DETAILS }`,
        );
        agencies = response.data;
        //console.log(agencies);
        return agencies;
    } catch (err) {
        console.error(`Something went wrong fetching the Agencies data: ${err}`);
        throw err;
    }
};

export const SateliiteList = async () => {
  if (satellites.length) {
      //console.log(agencies);
      return satellites;
  }
  try {
      const response = await axios.get(
          `${satellite_DETAILS }`,
      );
      satellites = response.data;
      //console.log(satellites);
      return satellites;
  } catch (err) {
      console.error(`Something went wrong fetching the satellites data: ${err}`);
      throw err;
  }
};


//API call for each individual space agency page : 

export const AgencyListId = async id => {
  if (agenciesId) {
      return agenciesId;
  }
  try {
      const agencyResponse = await axios.get(
        `${AGENCY_DETAILS}${id}`
      );
      agenciesId = agencyResponse.data;
      return agenciesId;
  } catch (err) {
      console.error(`Something went wrong fetching the space agency pages: ${err}`);
      throw err;
  }
};
