const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mq2Schema = new Schema(
  {
    isCODetected: { type: Boolean, required: true },
    isH2Detected: { type: Boolean, required: true },
    isLNGDetected: { type: Boolean, required: true },
    coPPM: { type: Number, required: true },
    h2PPM: { type: Number, required: true },
    lngPPM: { type: Number, required: true },
  },
  { timestamps: true }
);

const MQ2 = mongoose.model("MQ2", mq2Schema);
module.exports = MQ2;