const express = require('express');
const { app: { port } } = require('./config')
const route = require('./route');
const app = express();

app.use(express.json())
app.use(route);

app.listen(port, (error) => error  ? console.error(error) : console.log("Server running!")); 