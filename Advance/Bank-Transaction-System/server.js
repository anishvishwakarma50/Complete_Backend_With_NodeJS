require("dotenv").config()
const app = require("./src/app")
const ConnectDB = require("./src/db/db")

ConnectDB()

app.listen(process.env.PORT, () => {
    console.log("Server is Running on PORT "+ process.env.PORT)
})