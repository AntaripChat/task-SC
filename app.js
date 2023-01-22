const express = require('express');
const bodyparser = require('body-parser')
const app = express()
app.use(bodyparser.json());

module.exports = app;