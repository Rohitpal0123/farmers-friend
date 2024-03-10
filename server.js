const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const connectDB = require("./config/db");
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
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
const mq2Router = require("./routes/mq2");
const mq2SmokeRouter = require("./routes/mq2Smoke");
const rainRouter = require("./routes/rain");
const soilRouter = require("./routes/soil");
const cropsRouter = require("./routes/crops");

app.use("/crops", cropsRouter(io));
app.use("/rain", rainRouter(io));
app.use("/soil", soilRouter(io));
app.use("/mq2Smoke", mq2SmokeRouter(io));
app.use("/mq2", mq2Router(io));
app.use("/dht12", dht12Router(io));
app.use("/", (req, res) => {
  res.send("Welcome to Farmers Friend");
});


httpServer.listen(8881, () => {
  console.log("HTTP server is running on port 8881");
});