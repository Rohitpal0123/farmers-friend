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

      const startOfDay = new Date();
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);

      const soilMoistureAverageAggregation = await SOIL.aggregate([
        {
          $match: {
            createdAt: {
              $gte: startOfDay,
              $lt: endOfDay,
            },
          },
        },
        {
          $group: {
            _id: null,
            avgSoilMoisture: {
              $avg: "$moisturePercentage",
            },
          },
        },
        {
          $project: {
            _id: 0,
          },
        },
      ]);

      io.emit("soil", addSoil, soilMoistureAverageAggregation);

      res.status(201).send(addSoil);
    } catch (error) {
      console.log("🚀 ~ error:", error);
      res.status(400).send(error);
    }
  };
}

module.exports = new addSoil();


