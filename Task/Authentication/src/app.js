const express = require('express');
const app = express()
const authRoutes = require("./routes/auth.routes")
// for passing token  securly we user cookie-parser
const cookieParser = require("cookie-parser")

app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRoutes)
// now we won't write our api and logic in same file for that we will make use of routes and controllers 
// app.get("/", (req, res) => {
//     res.send("Server is listening correctly...")
// })

module.exports = app