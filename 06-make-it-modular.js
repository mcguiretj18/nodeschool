const filterFn = require('./mymodule');

const [,,dirToRead, fileExtension] = process.argv; 

filterFn(dirToRead, fileExtension, (err, files) => {
    if (err) {
        throw err;
    } else {
        files.map(file => console.log(file));
    }
});