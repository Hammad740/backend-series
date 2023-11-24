//// The eventEmitter.on() method is used to register listeners, while the eventEmitter.emit() method is used to trigger the event.
//// https://nodejs.org/api/events.html

//? bunch of modules rely heavily on this concept of event.Nodejs has event driven architecture.

const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', () => {
  console.log(`data received`);
});

customEmitter.on('response', () => {
  console.log(`some other logic.`);
});

customEmitter.emit('response');
