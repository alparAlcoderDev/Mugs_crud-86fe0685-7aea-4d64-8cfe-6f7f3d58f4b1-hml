require('dotenv').config();

module.exports = {
  secret: process.env.SECRET,
  siebelApiUrl: process.env.SIEBEL_API_URL,
  dynamodbTable: process.env.DYNAMODB_TABLE
};