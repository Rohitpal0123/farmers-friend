const express = require("express");
const router = express.Router();
const irrigateCrop = require("../controllers/Crops/irrigateCrop");

module.exports = (io) => {
  router.post("/add", require("../controllers/Crops/add").process);
  router.get("/get", require("../controllers/Crops/get").process);
  router.delete("/delete", require("../controllers/Crops/delete").process);
  router.put("/update/:id", require("../controllers/Crops/update").process);
  router.put("/irrigateCrop/:id", (req, res) => irrigateCrop.process(req, res, io));

  return router;

};