const express = require("express");
const router = express.Router();
const addRain = require("../controllers/Rain/add");

module.exports = (io) => {
    router.post("/add", (req, res) => addRain.process(req, res, io));
    return router;
    }

    