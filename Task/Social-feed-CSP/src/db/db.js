const mongoose = require("mongoose")

async function connectDB() {
    await mongoose.connect("mongodb+srv://vishwakarmaanish50_db_user:gQjkgLq8gOxIMLLu@cluster0.s1oxsx1.mongodb.net/social-feed-csp")

    console.log("Database is connected successfully")
}

module.exports = connectDB;