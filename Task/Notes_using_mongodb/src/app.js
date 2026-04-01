const express = require("express")

const app = express()

// Error Occured with data is undefined because it didn't used the middleware of json
// after using this server can able to understand the json data
app.use(express.json())

module.exports = app;