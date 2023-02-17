const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRETE_ACCESS_KEY
})

const dynamoClient = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = "spaceAgenciesData";


const getSpaceAgenciesData = async () => {
    const params = {
        TableName: TABLE_NAME
    };
    const agencies = await dynamoClient.scan(params).promise();
    return agencies
}



const getAllPosts = async() => {
    const params = {
        TableName : TABLE_NAME
    };
    const allPosts =  await dynamoClient.scan(params).promise();
    return allPosts
}


const addOrUpdateAgencies = async (agencies) => {
    const params = {
        TableName: TABLE_NAME,
        Item: agencies,
    }
    return await dynamoClient.put(params).promise();
};

const createPost = async (post) => {
    const params = {
        TableName: TABLE_NAME,
        Item: post,
    }
    return await dynamoClient.put(params).promise();
};


const getSpaceAgenciesDataById = async (id) => {
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id
        }
    }
    return await dynamoClient.get(params).promise();
}

const getPostById = async (id) => {
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id
        }
    }
    return await dynamoClient.get(params).promise();
}


const deleteAgencies = async (id) => {
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
    getSpaceAgenciesData,
    getSpaceAgenciesDataById,
    addOrUpdateAgencies,
    deleteAgencies,
    createPost,
    getAllPosts,
    getPostById
}