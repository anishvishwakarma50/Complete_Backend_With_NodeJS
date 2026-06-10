// const fs = require('fs')

// 1. Sync Method
// with the following method of reading file these is no call back to extract the data that's why it will execute directly in the call stack and then console will print the finish msg
// const data = fs.readFileSync('./msg.txt','utf-8')
 
// console.log(data)

// console.log("Finish Reading")

// 2. Async Method
// Now in this method it contains the call back method which goes to call back queue and after global execution context is destructed after printing finish msg then event loop put this into call stack and execute it
// fs.readFile('./msg.txt', 'utf-8', (err, data) => {
//     if(err) {
//         console.log(err)
//         return
//     }
//     console.log(data)
// })

// console.log("Finish Reading")