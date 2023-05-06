const path = require('path');
const fs = require('fs');

const filePath = path.resolve(`${__dirname}/secret-folder`);
fs.readdir(filePath, { withFileTypes: true }, (err, directories) => {
    onlyFiles = directories.filter(file => file.isFile());
    onlyFiles.forEach(file => {
        let fileSize = fs.statSync(`${filePath}/${file.name}`).size;
        let str = file.name.split('.');
        console.log(`${str[0]} - ${str[1]} - ${fileSize} bytes`);
    });
});