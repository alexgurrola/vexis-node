var net = require('net');

var server = net.createServer(function (socket) {
    socket.write('Echo server\r\n');
    socket.pipe(socket);
});

server.listen(81, '198.58.125.19');

console.log('Server running at 198.58.125.19:81/');
