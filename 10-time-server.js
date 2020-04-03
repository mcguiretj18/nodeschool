const { createServer } = require('net');
const strftime = require('strftime');

const [,,port] = process.argv;

function listener(socket) {
    socket.write(`${strftime('%Y-%m-%d %H:%M')}\n`);
    socket.end();
}

createServer(listener).listen(port);