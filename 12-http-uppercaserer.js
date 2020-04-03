'use strict';
const { createServer } = require('http');
const map = require('through2-map');

const [,,port] = process.argv;
const POST = 'POST';

function listener(request, response) {
    if (request.method !== POST) {
        return response.end('send me a POST\n');
    }

    if (request.method === POST) {
        request.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase();
        })).pipe(response);
    }
}

const server = createServer(listener);
server.listen(port);