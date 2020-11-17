import axios from 'axios';
import {
PERSONS_LIST_PATH 
} from '../constants/constants.js';

export let persons = [];

export const PersonsList = async () => {
    if (persons.length) {
        console.log(persons);
        return persons;
    }
    try {
      const response = await axios.get(
        `${PERSONS_LIST_PATH }`,
      );
        persons = response.data;
        console.log(persons);
        return persons;
    } catch (err) {
      console.error(`Something went wrong fetching the now playing data: ${err}`);
      throw err;
    }
  };
export const NasaList = async () => {
    if (persons.length) {
        console.log(persons);
        return persons;
    }
    try {
        const response = await axios.get(
            `${PERSONS_LIST_PATH }`,
        );
        persons = response.data;
        console.log(persons);
        return persons;
    } catch (err) {
        console.error(`Something went wrong fetching the now playing data: ${err}`);
        throw err;
    }
};
export const CnsaList = async () => {
    if (persons.length) {
        console.log(persons);
        return persons;
    }
    try {
        const response = await axios.get(
            `${PERSONS_LIST_PATH }`,
        );
        persons = response.data;
        console.log(persons);
        return persons;
    } catch (err) {
        console.error(`Something went wrong fetching the now playing data: ${err}`);
        throw err;
    }
};
export const IsroList = async () => {
    if (persons.length) {
        console.log(persons);
        return persons;
    }
    try {
        const response = await axios.get(
            `${PERSONS_LIST_PATH }`,
        );
        persons = response.data;
        console.log(persons);
        return persons;
    } catch (err) {
        console.error(`Something went wrong fetching the now playing data: ${err}`);
        throw err;
    }
};
export const RoscosmosList = async () => {
    if (persons.length) {
        console.log(persons);
        return persons;
    }
    try {
        const response = await axios.get(
            `${PERSONS_LIST_PATH }`,
        );
        persons = response.data;
        console.log(persons);
        return persons;
    } catch (err) {
        console.error(`Something went wrong fetching the now playing data: ${err}`);
        throw err;
    }
};

export const EsaList = async () => {
    if (persons.length) {
        console.log(persons);
        return persons;
    }
    try {
        const response = await axios.get(
            `${PERSONS_LIST_PATH }`,
        );
        persons = response.data;
        console.log(persons);
        return persons;
    } catch (err) {
        console.error(`Something went wrong fetching the now playing data: ${err}`);
        throw err;
    }
};
export const JaxaList = async () => {
    if (persons.length) {
        console.log(persons);
        return persons;
    }
    try {
        const response = await axios.get(
            `${PERSONS_LIST_PATH }`,
        );
        persons = response.data;
        console.log(persons);
        return persons;
    } catch (err) {
        console.error(`Something went wrong fetching the now playing data: ${err}`);
        throw err;
    }
};
export const BlueoriginList = async () => {
    if (persons.length) {
        console.log(persons);
        return persons;
    }
    try {
        const response = await axios.get(
            `${PERSONS_LIST_PATH }`,
        );
        persons = response.data;
        console.log(persons);
        return persons;
    } catch (err) {
        console.error(`Something went wrong fetching the now playing data: ${err}`);
        throw err;
    }
};

export const SpacexList = async () => {
    if (persons.length) {
        console.log(persons);
        return persons;
    }
    try {
        const response = await axios.get(
            `${PERSONS_LIST_PATH }`,
        );
        persons = response.data;
        console.log(persons);
        return persons;
    } catch (err) {
        console.error(`Something went wrong fetching the now playing data: ${err}`);
        throw err;
    }
};
