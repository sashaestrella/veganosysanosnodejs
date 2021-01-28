/**
 * Module dependencies.
 */
var app = require('../app');
var debug = require('debug')('veganosysanosnodejs:server');
var http = require('http');
var socketIo = require('socket.io');

/**
 * Get port from environment and store in Express.
 */
var port = normalizePort(process.env.PORT || '3001');
app.set('port', port);

/**
 * Create HTTP server.
 */
var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

var io = socketIo(server);
let clients = 0;
io.on('connection', (socket) => {
  //console.log("nueva conexion");
  socket.on("chat",function(data){
    io.sockets.emit("chat",data)
  });

  socket.on('typing', function(data){
    socket.broadcast.emit('typing', data);
  });

  socket.emit("message", {
    greeting: "<b>Bienvenido/a al chat de Veganos y Sanos! Recuerda elegir un nickname para enviar un mensaje y empezar a chatear con los usuarios conectados!</b>\n"
  });

  clients++;
  socket.broadcast.emit('newClientConnect',{ 
    description: clients + ' personas conectadas'
  });

  socket.emit('newClientConnect',{ 
    description: clients + ' personas conectadas'
  });
  
  socket.on('disconnect', function () {
    clients--;
    socket.broadcast.emit('newClientConnect',{ description: clients + ' personas conectadas'});
  });
});

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'puerto ' + addr.port;
  console.log('Servidor escuchando en '+ bind);
}