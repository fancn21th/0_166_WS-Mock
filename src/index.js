const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", function connection(ws) {
  console.log("something connected");

  ws.on("message", function incoming(message) {
    console.log("received: %s", message);
  });

  setInterval(() => {
    ws.send(Math.random() * 10);
  }, 1000);
});
