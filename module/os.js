//// os is a built-in module

//! import os from 'os';  ES6 feature
const os = require('os');

// info about current user
console.log(os.userInfo());

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
