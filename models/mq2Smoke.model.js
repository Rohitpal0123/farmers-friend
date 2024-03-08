const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mq2SmokeSchema = new Schema({
    isSmokeDetected: { type: Boolean, required: true },
},
    { timestamps: true }
);

const MQ2Smoke = mongoose.model("MQ2Smoke", mq2SmokeSchema);
module.exports = MQ2Smoke;