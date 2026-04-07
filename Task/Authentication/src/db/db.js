const mongoose = require("mongoose")

async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database Connected succefully")
    }
    catch (err) {
        console.log("Error Occured while connecting to database :", err)
    }
}

module.exports = connectDB