const http = require('http');
// Write a program that does an http GET request to the url provided
const [,,url] = process.argv;

http.get(url, (response) => {
    response.setEncoding('utf8');
    response.on('error', console.error);
    response.on('data', console.log);
}).on('error', console.error);;