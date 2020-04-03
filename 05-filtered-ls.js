const { readdir } = require('fs');

const [,, dirToRead, fileExtension] = process.argv;
// Step 1: Read the Directory to see how many files exists
// Step 2: Get all the coresponding file extensions and store in an array
// Step 3: Check the length of the array

// process.argv[0] -> file directory
// process.argv[1] -> file extension to filter by

readdir(dirToRead, 'utf8', (err, files) => {
    if (err) {
        console.log(err);
    }

    files
        .filter(file => file.endsWith(`.${fileExtension}`))
        .map(filteredFile => console.log(filteredFile));
});