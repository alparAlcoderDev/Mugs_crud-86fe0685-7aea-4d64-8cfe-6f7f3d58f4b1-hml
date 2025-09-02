const axios = require('axios');

exports.getData = async () => {
  try {
    const response = await axios.get(process.env.SIEBEL_API_URL);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};