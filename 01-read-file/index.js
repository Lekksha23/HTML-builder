const fs = require('fs');
const readline = require('readline');
const path = require('path');

async function getInfoFromTextFile() {
  const filePath = path.resolve(__dirname, './text.txt');
  const fileStream = fs.createReadStream(filePath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    console.log(line);
  }
}

getInfoFromTextFile();