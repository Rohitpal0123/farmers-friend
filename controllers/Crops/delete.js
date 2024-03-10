const Crops = require("../../models/crops.model");

class deleteCrops {
    async cropsExist(cropId) {
        const cropsExist = await Crops.findById(cropId);
        if (!cropsExist) throw "Crop not exists!";
        return null;
    }
    process = async (req, res) => {
        try {
        const { id } = req.body;

        await this.cropsExist(id);

        const deleteCrops = await Crops.findByIdAndDelete(id);
        if (!deleteCrops) throw "Crop not deleted!";
    
        res.status(200).send(deleteCrops);
        } catch (error) {
        console.log("🚀 ~ error:", error);
        res.status(400).send(error);
        }
    };
}

module.exports = new deleteCrops();