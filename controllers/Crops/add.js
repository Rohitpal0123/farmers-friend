const Crops = require("../../models/crops.model");

class addCrop {
  async cropsExist(cropName) {
    const cropsExist = await Crops.findOne({ name: cropName });
    if (cropsExist) throw "Crop already exists!";
    return null;
  }
  process = async (req, res) => {
    try {
      const { name, maxIrrigationMoisture, minIrrigationMoisture } =
        req.body;
    
        const isIrrigate = false;

      await this.cropsExist(name);

      const addData = await Crops.create({
        name,
        maxIrrigationMoisture,
        minIrrigationMoisture,
        isIrrigate,
      });
      if (!addData) throw "Crop not added!";

      res.status(200).send(addData);
    } catch (error) {
      console.log("🚀 ~ error:", error);
      res.status(400).send(error);
    }
  };
}

module.exports = new addCrop();
