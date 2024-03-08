const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const connectDB = require("./config/db");
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
const {emitDHT12} = require("./controllers/DHT12/emit");
require("dotenv").config();

connectDB();

app.use(express.json());
io.on("connection", (socket) => {
  console.log("A user connected - ", socket.id);
  socket.on("disconnect", () => {
    console.log("A user disconnected - ", socket.id);
  });
})
const dht12Router = require("./routes/dht12");

app.use("/dht12", dht12Router);

emitDHT12(io);
httpServer.listen(8881, () => {
  console.log("HTTP server is running on port 8881");
});