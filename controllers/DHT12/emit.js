const DHT12 = require("../../models/dht12.model");

function emitDHT12(io) {
  DHT12.watch().on("change", async (change) => {
    if (change.operationType === "insert") {
      const newData = change.fullDocument;
      io.emit("dht12", newData);
    }
  });
}

module.exports = { emitDHT12 };
