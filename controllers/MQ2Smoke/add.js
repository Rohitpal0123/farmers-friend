const MQ2SMOKE = require("../../models/mq2Smoke.model.js");
const add = require("../DHT12/add.js");

class addMQ2Smoke {
  process = async (req, res, io) => {
    try {
      const { isSmokeDetected } = req.body;
      const device = "MQ2";

      const addMQ2Smoke = await MQ2SMOKE.create({ device, isSmokeDetected });

      io.emit("mq2Smoke", addMQ2Smoke);

      res.status(201).send(addMQ2Smoke);
    } catch (error) {
      console.log("🚀 ~ error:", error);
      res.status(400).send(error);
    }
  };
}

module.exports = new addMQ2Smoke();
