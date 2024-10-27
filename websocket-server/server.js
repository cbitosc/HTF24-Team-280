const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 3001 });

server.on('connection', ws => {
  ws.on('message', message => {
    console.log(`Received message => ${message}`);
    // Send a response back to the client
    ws.send(`Server received: ${message}`);
  });

  ws.send('something');
});
