const DHT12 = require("../../models/dht12.model");

class addDHT12 {
  process = async (req, res, io) => {
    try {
      const { temperature, humidity } = req.body;
      const device = "DHT12";

      const addData = await DHT12.create({ device, temperature, humidity });
      if (!addData) throw "DHT12 data not added!";

      const startOfDay = new Date();
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);

      const dht12AverageAggregation = await DHT12.aggregate([
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
            avgTemp: {
              $avg: {
                $toDouble: "$temperature",
              },
            },
            avgHum: {
              $avg: {
                $toDouble: "$humidity",
              },
            },
          },
        },
        {
          $project: {
            _id: 0,
            avgTemp: 1,
            avgHum: 1,
          },
        },
      ]);

      io.("dht12", addData, dht12AverageAggregation);
      res.status(200).send(addData);
    } catch (error) {
      console.log("🚀 ~ error:", error);
      res.status(400).send(error);
    }
  };
}

module.exports = new addDHT12();
