const fs = require('fs');
const path = require('path');

const bundlePath = path.join(__dirname, 'project-dist/bundle.css');
const cssPath = path.join(__dirname, 'styles');

fs.readdir(cssPath, { withFileTypes: true }, (err, directories) => {
    onlyFiles = directories.filter(file => file.isFile());
    onlyFiles.forEach(async file => {
        let str = file.name.split('.');
        if (str[1] === 'css') {
            const input = fs.createReadStream(path.join(__dirname, 'styles', file.name));
            const output = fs.createWriteStream(bundlePath, {flags:'a'});
            input.pipe(output);
            output.on('end', () => 
                fs.appendFile(bundlePath, '\n', (err) => { 
                    if (err) { 
                        throw err;  
                    }
                })
            );
        }
    });
});