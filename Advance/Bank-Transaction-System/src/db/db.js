const mongoose = require("mongoose")

async function ConnectDB() {
    try{
        await mongoose.connect(process.env.Connection_url)

        console.log("Database Connected Successfully")
    } catch(err) {
        console.log("Error Occured While Connecting to Database")
        process.exit(1)
    }
}

module.exports = ConnectDB