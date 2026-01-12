const express = require('express');
const { verifySignatureFromDna } = require('./src/controller/verifySignature');
const { techinicalLinkedSignature } = require('./src/controller/techinicalLinkedSignature');

const route = express.Router();

route.get('/signature/verify/:id', verifySignatureFromDna);
route.post('/link', techinicalLinkedSignature )

module.exports = route;