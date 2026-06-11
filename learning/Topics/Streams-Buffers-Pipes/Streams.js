const fs = require('fs')

const readStream = fs.createReadStream('./large.txt', {
    encoding: 'utf-8'
})
let chunk_count = 0;
readStream.on('data', (chunk) => {
    console.log("Recieved Chunk")
    console.log(chunk.length)
    ++chunk_count;
})

readStream.on('end', () => {
    console.log("Reading Complete")
    console.log("Chunk Count : " + chunk_count)
})