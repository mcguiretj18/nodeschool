'use strict'
const { get } = require('http');
let count = 0;

const [,,...urls] = process.argv;
const responses = new Array(urls.length).fill(null);

function httpGet(idx) {
    get(urls[idx], response => {
        let results = '';
        response.setEncoding('utf8');
        response.on('data', data => {
            results += data;
        })
        response.on('end', () => {
            responses[idx] = results;
            count++;

            if (count === 3) {
                printResponses();
            }
        })
    })
}

for (let i = 0; i < 3; i++) {
    httpGet(i);
}

function printResponses() {
    for (let response of responses) {
        console.log(response);
    }
}