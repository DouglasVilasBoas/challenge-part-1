const axios = require("axios");
const createError = require('http-errors');
const config = require('../config');

async function getTechnical(id) {
  
  try {
    const { data } = await axios.get(`${config.service.technical}${id}`);
    return data
  } catch (error) {
    console.log(error)
    if(error.status === 404) {
       throw new createError.NotFound(error.response.data.message)
    }

  }

};

module.exports = { getTechnical };