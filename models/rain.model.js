const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rainSchema = new Schema(
    {
        isRaindetected: { type: Boolean, required: true },
    },
    { timestamps: true }
    );

const RAIN = mongoose.model("Rain", rainSchema);
module.exports = RAIN;