const axios = require('axios');

const { addOrUpdateCharacter } = require('./dynamodb');

const seedData = async () => {
  const url = 'https://isro.vercel.app/api/spacecrafts';
  try {
    const { data: characters } = await axios.get(url);
    const characterPromises = characters.spacecrafts.map((characters, i) => {
      addOrUpdateCharacter({ ...characters, id: i + '' })
    })
    await Promise.all(characterPromises);
  } catch (error) {
    console.error(error);
    console.log("HHHHHHHH");
  }

}

seedData();