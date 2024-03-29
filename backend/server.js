const http = require('http');
const app = require('./app');
const { normalizePort, errorHandler } = require('./errorHandling');

const port = normalizePort(process.env.PORT || '5038');
app.set('port', port);

const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

server.listen(port, () => {
  console.log("Server is running on port " + port);
});