var cluster = require('cluster');
var PORT = +process.env.PORT || 81;

if (cluster.isMaster) {

    cluster.fork();
    cluster.fork();

    cluster.on('disconnect', function (worker) {
        console.error('disconnect!');
        cluster.fork();
    });

} else {

    var domain = require('domain');

    var server = require('http').createServer(function (req, res) {

        var d = domain.create();

        d.on('error', function (er) {

            console.error('error', er.stack);

            try {

                var killtimer = setTimeout(function () {
                    process.exit(1);
                }, 30000);

                killtimer.unref();

                server.close();

                cluster.worker.disconnect();

                res.statusCode = 500;
                res.setHeader('content-type', 'text/plain');
                res.end('Oops, there was a problem!\n');

            } catch (er2) {

                console.error('Error sending 500!', er2.stack);

            }
        });

        d.add(req);
        d.add(res);

        d.run(function () {
            handleRequest(req, res);
        });
    });
    server.listen(PORT);
}

function handleRequest(req, res) {
    switch (req.url) {
        case '/error':
            // We do some async stuff, and then...
            setTimeout(function () {
                // Whoops!
                flerb.bark();
            });
            break;
        default:
            res.end('ok');
    }
}