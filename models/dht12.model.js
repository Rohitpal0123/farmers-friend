const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dht12Schema = new Schema(
  {
    device: { type: String, required: true },
    temperature: { type: String, required: true },
    humidity: { type: String, required: true },
  },
  { timestamps: true }
);

const DHT12 = mongoose.model("DHT12", dht12Schema);

module.exports = DHT12;
