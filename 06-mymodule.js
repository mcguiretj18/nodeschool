module.exports = (dirToRead, fileExtension, callback) => {
    const { readdir } = require('fs');
    
    readdir(dirToRead, 'utf8', (err, files) => {  
        if (err) {
            return callback(err);   
        } else {
            const filteredFiles = files.filter(file => file.endsWith(`.${fileExtension}`));   
            return callback(null, filteredFiles);
        }
    });
};