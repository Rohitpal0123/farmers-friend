const express = require("express");
const router = express.Router();
const addSoil = require("../controllers/Soil/add");

module.exports = (io) => {
    router.post("/add", (req, res) => addSoil.process(req, res, io));
    return router;
    }