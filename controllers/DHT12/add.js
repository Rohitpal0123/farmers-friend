const DHT12 = require("../../models/dht12.model");

class addDHT12 {
  
  process = async (req, res, io) => {
    try {
      const { temperature, humidity } = req.body;
      const device = "DHT12";
      
      const addData = await DHT12.create({ device, temperature, humidity });
      if (!addData) throw "DHT12 data not added!";
      
      io.emit("dht12", addData);
      res.status(200).send(addData);
    } catch (error) {
      console.log("🚀 ~ error:", error);
      res.status(400).send(error);
    }
  };
}

module.exports = new addDHT12();
