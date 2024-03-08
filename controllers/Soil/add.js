const SOIL = require("../../models/soil.model");

class addSoil {
  process = async (req, res, io) => {
    try {
      const { moisturePercentage, moistureLevel } = req.body;
      const device = "Soil";

      const addSoil = await SOIL.create({
        device,
        moisturePercentage,
        moistureLevel,
      });

      io.emit("soil", addSoil);

      res.status(201).send(addSoil);
    } catch (error) {
      console.log("🚀 ~ error:", error);
      res.status(400).send(error);
    }
  };
}

module.exports = new addSoil();
