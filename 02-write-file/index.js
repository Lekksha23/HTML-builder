const fs = require('fs');
const path = require('path');
const readline = require('readline');

const filePath = path.resolve(__dirname);
let writeableStream = fs.createWriteStream(`${filePath}/newFile.txt`);
console.log('Hello dear user! The file is created. Now you can write anything to it!');
process.stdin.pipe(writeableStream);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
    if (line === 'exit') {
      console.log('BYE!!')
      process.exit();
    }
});

rl.once('close', () => {
     console.log('BYE!!')
 });