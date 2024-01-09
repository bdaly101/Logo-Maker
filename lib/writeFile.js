

const fs = require('fs'); 

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Successfully created a svg file!');
    });
}

module.exports = writeToFile;


