const { createServer } = require('http');

const [,,port] = process.argv;

const PARSETIME = 'parsetime';
const UNIXTIME = 'unixtime';

function parseTime(time) {
    return {
        hour: new Date(time).getHours(),
        minute: new Date(time).getMinutes(),
        second: new Date(time).getSeconds(),
    }
}

function setUnixTime(time) {
    return {
        unixtime: new Date(time).getTime(),
    }
}

function listener(request, response) {
    const [key, value] = request.url.split('?')[1].split('=');
    // https://stackoverflow.com/questions/19696240/proper-way-to-return-json-using-node-or-express
    response.setHeader('Content-Type', 'application/json');
    switch(true) {
        case request.url.includes(PARSETIME):
            response.end(JSON.stringify(parseTime(value)));
        case request.url.includes(UNIXTIME):
            response.end(JSON.stringify(setUnixTime(value)));
        default:
            response.end(JSON.stringify({ data: null }));
    }
}

createServer(listener).listen(port);