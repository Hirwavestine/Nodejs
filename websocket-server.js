const WebSocketServer = require("ws").Server;
const WSS = new WebSocketServer({ port: 3232 });
//listening on client
WSS.on("connection", ws => {
  //listen on message
  ws.on("message", message => {
    //get data to everybody
    WSS.clients.forEach(client => {
      //send the message back
      client.send(message);
    });
    console.log(message);
  });
  console.log("We are connected");
});
