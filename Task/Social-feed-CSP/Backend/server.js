// This is an Simple application which consist of two API's
// 1. create-post API for creating post with Image + Caption
// 2. feed API for returning Feed with object
// This task is little bit important because here we are going to use cloud service provider for image upload (imagekit)
require("dotenv").config()
// let's start
const app = require("./src/app")
const connectDB = require("./src/db/db")

connectDB()

app.listen(3000, () => {
    console.log("Server is Started Successfully...")
})