const Crops = require("../../models/crops.model");

class irrigateCrops {
  async cropIsIrrigated(id) {
    const isIrrigateTrue = await Crops.findById(id);
    if (isIrrigateTrue.isIrrigate) throw "Crops already irrigating";
    return null;
  }
  process = async (req, res, io) => {
    try {
      const id = req.params.id;
      const update = req.body;

      await this.cropIsIrrigated(id);

      const changeIsIrrigate = await Crops.updateMany(
        {},
        { isIrrigate: false }
      );
      if (!changeIsIrrigate) throw "Crops doesn't exist";

      const updatedCrops = await Crops.findByIdAndUpdate(id, update, {new: true});
      if (!updatedCrops) throw "Crop doesn't exist";

        io.emit("irrigateCrop", updatedCrops);
      res.status(200).send(updatedCrops);
    } catch (error) {
      console.log("🚀 ~ error:", error);
      res.status(400).send(error);
    }
  };
}

module.exports = new irrigateCrops();
