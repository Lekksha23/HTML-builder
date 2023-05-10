const fs = require('fs');
const path = require('path');

fs.rm(path.join(__dirname, 'files-copy'), { recursive: true, force: true }, (err) => {
    if (err) {
      return console.error(err);
    }
    fs.mkdir(path.join(__dirname, 'files-copy'), function(err) {
        if (!err || (err && err.code === 'EEXIST')) {
            console.log('Folder is created');
            const filePath = path.join(__dirname, 'files');
            fs.readdir(filePath, { withFileTypes: true }, (err, files) => {
                files.forEach(file => {
                    const filePath = path.join(__dirname, 'files', file.name);
                    fs.promises.copyFile(filePath, path.join(__dirname, 'files-copy', file.name));
                });
            });
        } else {
            console.log(err);
        }
    });
});

