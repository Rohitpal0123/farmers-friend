const MQ2 = require("../../models/mq2.model.js");

class addMQ2 {
  process = async (req, res, io) => {
    try {
      const data = req.body;
      const device = "MQ2";

      const addData = await MQ2.create({ device, ...data });
      if (!addData) throw "MQ2 data not added!";

      const startOfDay = new Date();
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);

      const mq2AverageAggregation = await MQ2.aggregate([
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
            coPPMAverage: {
              $avg: "$coPPM",
            },
            lngPPMAverage: {
              $avg: "$lngPPM",
            },
            h2PPMAverage: {
              $avg: "$h2PPM",
            },
          },
        },
        {
          $project: {
            _id: 0,
          },
        },
      ]);
      console.log("🚀 ~ mq2AverageAggregation:", mq2AverageAggregation);

      io.emit("mq2", addData, mq2AverageAggregation);
      res.status(200).send(addData);
    } catch (error) {
      console.log("🚀 ~ error:", error);
      res.status(400).send(error);
    }
  };
}

module.exports = new addMQ2();
