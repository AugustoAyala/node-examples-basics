const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
const myEmitter1 = new MyEmitter();

myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');

myEmitter1.on('event1', function(a, b) {
    console.log(a, b, this, this === myEmitter1);
    // Prints:
    //   a b MyEmitter {
    //     domain: null,
    //     _events: { event: [Function] },
    //     _eventsCount: 1,
    //     _maxListeners: undefined } true
  });
  myEmitter1.emit('event1', 'a', 'b');