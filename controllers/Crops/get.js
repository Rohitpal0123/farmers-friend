const Crops = require("../../models/crops.model");

class getCrops {

    process = async (req, res) => {
        try {
            const getCrops = await Crops.find();
            if (!getCrops) throw "No crops found!";

            res.status(200).send(getCrops);
        } catch (error) {
            console.log("🚀 ~ error:", error)
            res.status(400).send(error)
        }
}
}

module.exports = new getCrops();