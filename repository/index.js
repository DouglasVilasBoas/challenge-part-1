const factory = require('./factory.js');
const config = require('../config/index.js')

const db = require('../database')

const repository = factory({ db, collectionName: config.mongo.collection });

module.exports = { repository };