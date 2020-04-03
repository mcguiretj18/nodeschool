const { readFile } = require('fs');
const [,,fileToRead] = process.argv;

readFile(fileToRead, 'utf8', (err, text) => {
    if (err) {
        console.log(err);
    }

    const newLines = text.split('\n').length - 1;
    console.log(newLines);
});