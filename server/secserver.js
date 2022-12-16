const Fs = require('fs');
const Https = require('https');
const WebSocketServer = require('ws').Server;

const httpsServer = Https.createServer({
  key: Fs.readFileSync('privkey.pem'),
  cert: Fs.readFileSync('fullchain.pem')
});
const wss = new WebSocketServer({
  server: httpsServer
});

httpsServer.on('request', (req, res) => {
  res.writeHead(200);
  res.end('hello HTTPS world\n');
});

wss.on('connection', (ws) => {
  ws.send('hello');

  ws.on('message', (data) => {
    ws.send('message received: ', data);
  });
  ws.on('close', () => {
    console.log('socket closed');
  });
});

httpsServer.listen(8000);
