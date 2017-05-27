const mic = require('mic');
var fs = require('fs');
const path = require('path');
const encoder = require('./encoder');
const readFrom = require('./reader');

const micInstance = mic({
  rate: 44100,
  encoding: ' unsinged-integer',
  channels: '2',
  debug: false,
  exitOnSilence: 6,
  device: 'plughw:0',
  bitwidth: 16,
 });

const FILE_PATH = path.resolve(__dirname, '../', 'assets', 'output.mp3');

const record = (time) => new Promise((resolve, reject) => {
   var micInputStream = micInstance.getAudioStream();
   var outputFileStream = fs.WriteStream(FILE_PATH);
   micInputStream.pipe(encoder);
   encoder.pipe(outputFileStream);
    micInputStream.on('error', err => reject(err));

   console.log('---------------START RECORDING----------------')
   micInstance.start();

   setTimeout(function () {
     micInstance.stop();
     console.log('---------------STOP RECORDING----------------')
     setTimeout(function () {
       readFrom(FILE_PATH)
       .then(data => resolve(data))
       .catch(err => reject(err))
     }, 500);
   }, time);
});

module.exports = record;
