const express = require('express');

// error handler from express
const errorHandler = require("./middleware/errorHandler");

//  custom router
const SchemeRouter = require('./schemes/scheme-router-new.js');

const server = express();
//test comment

// Testing comments
server.use(express.json());

server.get("/", (req, res) => {
    res.send("We up, bro")
})


server.use('/api/schemes', SchemeRouter);
server.use(errorHandler);

module.exports = server;