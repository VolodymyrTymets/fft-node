const _ = require('lodash');
const fft = require("ndarray-fft")
const ndarray = require('ndarray');
const math = require('mathjs');
const record = require('./src/recorder');


//
//
// decode('Crash-Cymbal-3.wav')
//   .then(audioData => {
//     const lowRange = ndarray(audioData.channelData[0]);
//     const upRange = ndarray(audioData.channelData[1]);
//     console.log('Love Channel Range ->', lowRange.data.slice(0, 3));
//     console.log('Up Channel Range ->', upRange.data.slice(0, 3));
//
//     fft(1, lowRange, upRange);
//
//     // console.log('Love Signal Range ->', lowRange.data.slice(0, 3));
//     // console.log('Up Signal Range ->', upRange.data.slice(0, 3));
// }).catch(err => console.log('Can no read file...(', err));


record(2000).then(audioData => {
  const lowRange = ndarray(audioData.data[0]);
  const upRange = ndarray(audioData.data[1]);
  console.log('Love Channel Range ->', lowRange.data.slice(0, 3));
  console.log('Up Channel Range ->', upRange.data.slice(0, 3));

  fft(1, lowRange, upRange);

  console.log('Love Signal Range ->', lowRange.data.slice(0, 3));
  console.log('Up Signal Range ->', upRange.data.slice(0, 3));

  const maxOfLoveRange =  _.max(lowRange.data);
  const maxOfUpRange =  _.max(upRange.data);
  console.log('maxOfLoveRange ->', maxOfLoveRange);
  console.log('maxOfUpRange ->', maxOfUpRange);

}).catch(err => {
  console.log('-----------------ERROR---------------------');
  console.log(err);
})
