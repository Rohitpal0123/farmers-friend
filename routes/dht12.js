const express = require("express");
const router = express.Router();

router.post("/add", require("../controllers/DHT12/add").process);

module.exports = router;