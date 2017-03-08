
const fft = require("ndarray-fft")
const ndarray = require('ndarray');
const decode = require('./src/wav-decoder');

decode('Crash-Cymbal-3.wav')
  .then(audioData => {
    const lowRange = ndarray(audioData.channelData[0]);
    const upRange = ndarray(audioData.channelData[1]);
    console.log('Love Channel Range ->', lowRange.data.slice(0, 3));
    console.log('Up Channel Range ->', upRange.data.slice(0, 3));

    fft(1, lowRange, upRange);

    console.log('Love Signal Range ->', lowRange.data.slice(0, 3));
    console.log('Up Signal Range ->', upRange.data.slice(0, 3));
}).catch(err => console.log('Can no read file...(', err));
