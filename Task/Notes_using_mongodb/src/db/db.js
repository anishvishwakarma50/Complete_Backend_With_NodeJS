const mongoose = require("mongoose")

async function connectDB() {
    await mongoose.connect("mongodb+srv://vishwakarmaanish50_db_user:gQjkgLq8gOxIMLLu@cluster0.s1oxsx1.mongodb.net/complete_backend")

    console.log("Database is Connected Successfully")
}

module.exports = connectDB;