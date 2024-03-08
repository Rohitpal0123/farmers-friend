const MQ2 = require("../../models/mq2.model.js");

class addMQ2 {
  emitMQ2 = (io, data) => {
    io.emit("mq2", data);
  };

  process = async (req, res, io) => {
    try {
      const data = req.body;
      const device = "MQ2";

      const addData = await MQ2.create({ device, ...data });
      if (!addData) throw "MQ2 data not added!";

      this.emitMQ2(io, addData);
      res.status(200).send(addData);
    } catch (error) {
      console.log("🚀 ~ error:", error);
      res.status(400).send(error);
    }
  };
}

module.exports = new addMQ2();
// isCODetected
// false
// isH2Detected
// false
// isLNGDetected
// false
// coPPM
// 1.5
// h2PPM
// 0.32
// lngPPM
// 0.25
