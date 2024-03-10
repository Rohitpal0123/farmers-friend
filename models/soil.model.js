const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const soilSchema = new Schema(
    {
        moisturePercentage: { type: Number, required: true },
        moistureLevel: { type: String, required: true },
    },
    { timestamps: true }
    );

const SOIL = mongoose.model("Soil", soilSchema);
module.exports = SOIL;
