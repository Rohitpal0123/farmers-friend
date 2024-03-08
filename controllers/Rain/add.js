const RAIN = require('../../models/rain.model');

class addRain {
    process = async (req, res, io) => {
        try {
            const { isRaindetected } = req.body;
            const device = "Rain";

            const addRain = await RAIN.create({ device, isRaindetected });

            io.emit('rain', addRain);

            res.status(201).send(addRain);
        } catch (error) {
            console.log('🚀 ~ error:', error);
            res.status(400).send(error);
        }
    };
}

module.exports = new addRain();