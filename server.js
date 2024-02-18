const { Socket } = require("engine.io");
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);



httpServer.listen(8881, () => {
    console.log("HTTP server is running on port 8881");
});