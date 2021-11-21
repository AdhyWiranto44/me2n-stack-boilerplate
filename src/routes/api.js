const express = require('express');
const app = express();
const exampleRouter = require('./example_router');


app.use(exampleRouter);


module.exports = app;