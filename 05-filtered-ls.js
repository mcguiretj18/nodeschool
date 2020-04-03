const { readdir } = require('fs');

const [,, dirToRead, fileExtension] = process.argv;

readdir(dirToRead, 'utf8', (err, files) => {
    if (err) {
        console.log(err);
    }

    files
        .filter(file => file.endsWith(`.${fileExtension}`))
        .map(filteredFile => console.log(filteredFile));
});