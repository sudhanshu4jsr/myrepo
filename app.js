'use strict';

/* Component  setup */
const Promise         = require('bluebird');
const cp         = Promise.promisifyAll(require('child_process'));
const to         = require('await-to-js').default;

async function main() {
    var [err, stdout] = await to(cp.execAsync("gst-launch-1.0 videotestsrc num-buffers=100 ! qtmux ! filesink location=dump.mp4"));
    console.log("Gst", stdout);
    var [err, stderr] = await to(cp.execAsync("ffprobe dump.mp4"));
    console.log("ffmpeg", stderr);
}

main();