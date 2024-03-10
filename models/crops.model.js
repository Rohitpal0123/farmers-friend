const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cropsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    maxIrrigationMoisture: {
        type: Number,
        required: true,
    },
    minIrrigationMoisture: {
        type: Number,
        required: true,
    },
    isIrrigate: {
        type: Boolean,
        required: true,
    },
    },
    {
        timestamps: true,
    }
    );

    const Crops = mongoose.model("Crops", cropsSchema);
    module.exports = Crops;
