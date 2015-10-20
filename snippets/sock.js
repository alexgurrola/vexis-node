var net = require('net');

var server = net.createServer(function (socket) {
	console.log('Client Connected!');
	/*socket.on('end', function () {
        console.log('Client Disconnected!');
    });
    socket.write('Hello!\r\n');
    socket.pipe(socket);*/
	socket.end("Goodbye!\r\n");
});

server.listen({ port: 7900, exclusive: true }, function() {
	address = server.address();
	console.log("Listening: %j", address);
});