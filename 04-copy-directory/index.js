const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'files-copy'), function(e) {
    if (!e || (e && e.code === 'EEXIST')) {
        console.log('Folder is created');
    } else {
        console.log(e);
    }
});

const filePath = path.join(__dirname, 'files');

fs.readdir(filePath, { withFileTypes: true }, (err, files) => {
    files.forEach(file => {
        const filePath = path.join(__dirname, 'files', file.name);
        fs.promises.copyFile(filePath, path.join(__dirname, 'files-copy', file.name));
    });
});