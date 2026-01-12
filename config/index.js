require('dotenv').config({ quiet: true });

module.exports = Object.freeze({
  app: Object.freeze({
    port: process.env.PORT,
  }),
  mongo: Object.freeze({
    uri: process.env.MONGO_URI,
    db: process.env.MONGO_DB,
    collection: process.env.MONGO_COLLECTION,
  }), 
  service: Object.freeze({
    technical: process.env.TECHNICAL_SERVICE,
    signature: process.env.SIGNATURE_SERVICE,
  }),
});