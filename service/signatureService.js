const axios = require("axios");
const config = require('../config');

async function getSignature(id) {
  const { data } = await axios.get(`${config.service.signature}${id}`);
  return data
};

module.exports = { getSignature };