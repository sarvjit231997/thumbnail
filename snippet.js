
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);


//const ffmpeg = require('fluent-ffmpeg');

ffmpeg({ source: './WhatsApp Video 2021-06-18 at 1.10.33 PM.mp4' })
    .on('filenames', (filenames) => {
        console.log('Created file names', filenames);
    })
    .on('end', () => {
        console.log('Job done');
    })
    .on('error', (err) => {
        console.log('Error', err);
    })
    .takeScreenshots({
        filename: 'example.jpg',
        timemarks: [ 2, 4 ]
    }, '.');