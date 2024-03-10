const Crops = require("../../models/crops.model");

class updateCrops {
  process = async (req, res) => {
    try {
      const id = req.params.id;
      const update = req.body;

      const updatedCrops = await Crops.findByIdAndUpdate(id, update);
      if (!updatedCrops) throw "Crop doesn't exist";

      res.status(200).send(updatedCrops);
    } catch (error) {
      console.log("🚀 ~ error:", error);
      res.status(400).send(error);
    }
  };
}

module.exports = new updateCrops();
