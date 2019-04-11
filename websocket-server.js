const WebSocketServer = require("ws").Server;
const WSS = new WebSocketServer({ port: 3232 });
//listening on client
WSS.on("connection", ws => {
  console.log("We are connected");
});
