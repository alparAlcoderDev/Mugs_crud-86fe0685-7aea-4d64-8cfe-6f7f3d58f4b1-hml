const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.saveData = async (data) => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: data
  };

  try {
    await dynamodb.put(params).promise();
  } catch (error) {
    throw new Error(error);
  }
};