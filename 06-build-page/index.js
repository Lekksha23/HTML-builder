const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'project-dist');
const cssPath = path.join(__dirname, 'styles');
const assetsPath = path.join(__dirname, 'assets');

fs.mkdir(folderPath, function(e) {
    if (!e || (e && e.code === 'EEXIST')) {
        console.log('Folder is created');
    } else {
        console.log(e);
    }
});

fs.readdir(cssPath, { withFileTypes: true }, (err, files) => {
    files.forEach(async file => {
        const input = fs.createReadStream(path.join(__dirname, 'styles', file.name));
        input.on('data', data => {
            fs.createWriteStream(path.join(folderPath, 'style.css')).write(data.toString() + '\n');
        });
    });
});
