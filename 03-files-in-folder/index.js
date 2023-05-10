const path = require('path');
const fs = require('fs');

const filePath = path.resolve(`${__dirname}/secret-folder`);
fs.readdir(filePath, { withFileTypes: true }, (err, directories) => {
    onlyFiles = directories.filter(file => file.isFile());
    onlyFiles.forEach(file => {
        fs.stat(path.join(filePath, file.name), 
        (err, stats) => {
            if (err) throw err;
        let str = file.name.split('.');
        console.log(`${str[0]} - ${str[1]} - ${stats.size} bytes`);
        });
    });
});