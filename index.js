const fs = require('fs');
// const wav = require('wav');
const path = require('path');
const WavDecoder = require('wav-decoder');
const ifft =  require('fft-js').ifft;
//const fft =  require('fft-js').fft;
const fftUtil = require('fft-js').util;
const chart = require('ascii-chart');
const clear = require('clear');

var zeros = require("zeros")
var ops = require("ndarray-ops")
var fft = require("ndarray-fft")
const ndarray = require('ndarray');

const filename = 'Crash-Cymbal-3.wav';
const filePath = path.resolve(__dirname, 'assets', filename);

console.log('Read file ->', filePath);

//const file = fs.createReadStream(filePath);
// const reader = new wav.Reader();


// // the "format" event gets emitted at the end of the WAVE header
// reader.on('format', function (format) {
//   console.log('argumens ->', format)
//
//   WavEncoder.encode(whiteNoise1sec).then((buffer) => {
//   fs.writeFileSync("noise.wav", new Buffer(buffer));
// });
//
// });

// // pipe the WAVE file to the Reader instance
// file.pipe(reader);

const readFile = (filepath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, (err, buffer) => {
      if (err) {
        return reject(err);
      }
      return resolve(buffer);
    });
  });
};

readFile(filePath).then((buffer) => {
  return WavDecoder.decode(buffer);
}).then(function(audioData) {
  // console.log(audioData.sampleRate);
  // console.log(audioData.channelData[0]); // Float32Array
  //console.log(audioData.channelData[1]); // Float32Array
  const phasors = [];
  const { sampleRate } = audioData;
  // audioData.channelData[0].forEach(
  //   (lowerAmplitude, index) => {
  //     const apperAmplitude = audioData.channelData[1][index];
  //     const phasor = [lowerAmplitude, apperAmplitude];
  //     phasors.push(phasor);
  //   });



 // const partPhasors = phasors.slice(0, 10);

  // console.log('partPhasors -> ', partPhasors)
  // console.log('____________ START Ifft______________')
  // //let signal = [];
  // try{
  //
  //
  //   // for(let i = 0; i< phasors.length; i+= 5) {
  //   //
  //   //   const vector = phasors.slice(i, i+5);
  //   //         console.log('vector ->', vector)
  //   //   signal.push(fft(vector));
  //   //   console.log('signal ->', signal)
  //   // }
  //
  //
  // } catch(e) {
  //   console.log('erro ->', e)
  // }
  // //const frequencies = fftUtil.fftFreq(phasors, sampleRate);
  //  const signal = fft(partPhasors);
  //
  // console.log('____________end Ifft______________')
  // console.log('signal ->', signal);


  const x = ndarray(audioData.channelData[0]);
  const y = ndarray(audioData.channelData[0]);
  // const x1 = ops.random(zeros([256, 256]))
  // const y1 = ops.random(zeros([256, 256]))
  //
  // //console.log('ndarray ->',ndarray(audioData.channelData[0]));
  // // const x = { data: [0.4] };
  // // const y = { data: [0.5] };
  // console.log('x ->', x.data[0]);
  console.log(' x ->', x.data[0]);
  fft(1, x, y);
  console.log('x 1->', x.data[0]);

//  console.log('frequencies ->', frequencies);
  // clear();
  // console.log(chart(frequencies.splice(1, 50), {
  //   width: 130,
  //   height: 30,
  //   pointChar: '█',
  //   negativePointChar: '░'
  // }));
});
