const fs = require('fs');
const path = require('path');
const WavDecoder = require('wav-decoder');


const decode = fileName => {
  const filePath = path.resolve(__dirname, '../', 'assets', fileName);
  console.log('file path -> ', filePath)
  const readFile = filepath => {
    return new Promise((resolve, reject) => {
      fs.readFile(filepath, (err, buffer) => {
        if (err) {
          return reject(err);
        }
        console.log('file length ------>>', buffer.length)
        return resolve(buffer);
      });
    });
  };

 return readFile(filePath).then((buffer) => {
    return WavDecoder.decode(buffer);
 });
}

module.exports = decode;
