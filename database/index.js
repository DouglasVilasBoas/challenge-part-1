const { MongoClient } = require('mongodb');
const createError = require('http-errors');
const config = require('../config/index');

const state = {
  client: null,
  db: null,
};

const isConnected = () => state.db && state.client?.topology?.isConnected();

 async function connectToDatabase() {
  try {
    state.client = await MongoClient.connect(config.mongo.uri);
    state.db = state.client.db(config.mongo.db);
  } catch (error) {
    console.error('Failed on connectToDatabase method:', error);
    throw new createError.InternalServerError(error.message);
  }
}

async function getCollection(id) {
  if (!isConnected()) await connectToDatabase();
  return state.db.collection(id);
}

module.exports = { getCollection };