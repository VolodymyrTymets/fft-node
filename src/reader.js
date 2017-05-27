var fs = require('fs');
const decode = require('audio-decode');
const context = require('audio-context');

const readFrom = (fileName) => new Promise((resolve, reject) => {
  fs.readFile(fileName, (err, buffer) => {
    if (err) {
     reject(err)
    }

    decode(buffer, { context: context }, (err, audioData) => {
      if (err) {
       reject(err)
      }
      resolve(audioData)
    });
  })
});

module.exports = readFrom;
