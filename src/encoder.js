
const lame = require('lame');

const encoder = new lame.Encoder({
  // input
  channels: 2,        // 2 channels (left and right)
  bitDepth: 16,       // 16-bit samples
  sampleRate: 44100,  // 44,100 Hz sample rate

  // output
  bitRate: 128,
  outSampleRate: 44100,
  mode: lame.STEREO // STEREO (default), JOINTSTEREO, DUALCHANNEL or MONO
});

module.exports = encoder;
