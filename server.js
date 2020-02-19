const express = require('express');

const SchemeRouter = require('./schemes/scheme-router-new.js');
const errorHandler = require("./middleware/errorHandler");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.send("We up, bro")
})

server.use('/api/schemes', SchemeRouter);
server.use(errorHandler);

module.exports = server;