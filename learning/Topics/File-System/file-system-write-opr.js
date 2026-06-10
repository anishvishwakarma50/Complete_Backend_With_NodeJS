const fs = require("fs")

// first this log will be printed
console.log('msg before file write')

// it is moved to call back queue for wait
fs.writeFile('./notes.txt', 'Hey this is Small msg from js', 'utf-8', () => {
    // when global execution context is destructed then this will be tranfered to call stack from call back queue by event loop then it is executed
    console.log("text written !!")
})

// second this log will be printed
console.log('msg after file write')

// it is moved to call back queue after write file
fs.readFile('./notes.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log(err)
    }
    // this is also gone to call stack right after the write method
    console.log(data)
})

// third this log will be printed
console.log('msg after reading file')

// Flow
// Async function
//      ↓
// libuv Thread Pool / OS
//      ↓
// Operation completes
//      ↓
// Callback Queue
//      ↓
// Event Loop
//      ↓
// Call Stack