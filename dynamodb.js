const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRETE_ACCESS_KEY
})

const dynamoClient = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = "isroInformation";


const getCharacters = async () => {
    const params = {
        TableName: TABLE_NAME
    };
    const characters = await dynamoClient.scan(params).promise();
    console.log(characters);
    return characters
}


const addOrUpdateCharacter = async (characters) => {
    const params = {
        TableName: TABLE_NAME,
        Item: characters,
    }
    return await dynamoClient.put(params).promise();
};


const getCharactersById = async (id) => {
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id
        }
    }
    return await dynamoClient.get(params).promise();
}


const deleteCharacters = async (id) => {
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id
        }
    }
    return await dynamoClient.delete(params).promise();
}

module.exports = {
    dynamoClient,
    getCharacters,
    getCharactersById,
    addOrUpdateCharacter,
    deleteCharacters
}