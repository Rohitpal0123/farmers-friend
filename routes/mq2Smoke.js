const express = require("express"); 
const router = express.Router();
const addMQ2Smoke = require("../controllers/MQ2Smoke/add");

module.exports = (io) => {
    router.post("/add", (req, res) => addMQ2Smoke.process(req, res, io));
    
    return router;
}

