require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const mainRouter = require('./src/routes/api');
const dbConnect = require('./src/database/db_connection');


app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(mainRouter);

dbConnect();


app.listen(PORT, function() { console.log(`http://localhost:${PORT}`) });