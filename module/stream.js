//**  What makes streams powerful while dealing with large amounts of data is that instead of reading a file into memory all at once, streams actually read chunks of data, processing its content data without keeping it all in memory. */
//** https://www.geeksforgeeks.org/node-js-streams/ */

const { createReadStream } = require('fs');
const stream = createReadStream('./content/first.txt');

stream.on('data', (chunk) => {
  console.log(chunk);
});
