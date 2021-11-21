const express = require('express');
const app = express();
const exampleController = require('../controllers/example_controller');


app.get("/", exampleController.index);


module.exports = app;