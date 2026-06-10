// Understanding how asynchronous operations work in Node.js

// There are three important concepts:
//
// 1. Call Stack - Executes synchronous code.
// 2. Queues - Store callbacks waiting to be executed.
//    (process.nextTick queue, Promise microtask queue, timers queue, etc.)
// 3. Event Loop - Continuously checks whether the Call Stack is empty and
//    moves callbacks from the appropriate queue to the Call Stack.

// Synchronous code is executed immediately.
console.log("log first");        // first

// setTimeout registers a timer with Node.js.
// After 3 seconds, its callback is placed in the Timers Queue.
setTimeout(() => {
    console.log("timeout Function");     // fifth
}, 3000);

// setImmediate registers its callback to be executed during
// the Check phase of the Event Loop.
setImmediate(() => {
    console.log("Immediate Function");   // fourth
});

// process.nextTick callback is placed in the Next Tick Queue.
// This queue has the highest priority and is executed before
// Promise callbacks and before moving to the next Event Loop phase.
process.nextTick(() => {
    console.log("process next tick function");     // second
});

// Promise callbacks are placed in the Microtask Queue.
// After the Next Tick Queue is emptied, Node.js executes
// all Promise microtasks before continuing with the Event Loop.
Promise.resolve().then(() => {
    console.log("Promise Resolved");     // third
});

// Once all synchronous code finishes and the Call Stack becomes empty,
// Node.js executes callbacks in the following order:
//
// 1. process.nextTick Queue
// 2. Promise Microtask Queue
// 3. Event Loop phases (Timers, Poll, Check, etc.)
//
// Since setTimeout has a 3-second delay, its callback becomes available later,
// so the output is:
//
// log first
// process next tick function
// Promise Resolved
// Immediate Function
// timeout Function