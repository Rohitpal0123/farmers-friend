const express = require('express');
const router = express.Router();
const addMQ2 = require("../controllers/MQ2/add.js");

module.exports = (io) => {
    
    router.post('/add', (req, res) => addMQ2.process(req, res, io));
    
    return router;
    }