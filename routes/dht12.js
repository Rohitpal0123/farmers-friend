const express = require("express");
const router = express.Router();
const addDHT12 = require("../controllers/DHT12/add.js")


module.exports = (io) => {
  // Routes that need io
  router.post('/add', (req, res) => addDHT12.process(req, res, io));


  return router;
};