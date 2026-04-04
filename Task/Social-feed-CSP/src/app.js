const express = require("express")
// importing multer is important to read form data
const multer = require("multer")

const app = express()
app.use(express.json())

// Set-up the multer
const upload = multer({ storage: multer.memoryStorage() })

// lets start creating API's 

// 1. /create-post - POST 
// here we cannot read the request with json because the data is coming in form-data format for that we need to use multer
app.post("/create-post", upload.single("image"), async (req, res) => {
    console.log(req.body)
    // file doesn't comes in req.body for that we use following code
    console.log(req.file)
})

module.exports = app