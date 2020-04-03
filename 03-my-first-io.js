const { readFileSync } = require('fs');

const [nodePath, filePath, fileToRead] = process.argv;

const newLines = readFileSync(fileToRead).toString().split('\n').length - 1;
console.log(newLines);