const { createReadStream } = require('fs');
const { createServer } = require('http');

const [,,port, filePath] = process.argv;

function listener(request, response) {
    const readStream = createReadStream(filePath, { encoding: 'utf8' });

    // This will wait until we know the readable stream is actually valid before piping
    readStream.on('open', () => {
        // This just pipes the read stream to the response object (which goes to the client)
        readStream.pipe(response);
    });

    // This catches any errors that happen while creating the readable stream (usually invalid names)
    readStream.on('error', err => {
      res.end(err);
    });
}

createServer(listener).listen(port);