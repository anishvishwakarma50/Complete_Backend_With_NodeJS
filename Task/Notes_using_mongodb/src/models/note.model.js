// requires mongoose
const mongoose = require("mongoose")

// Schema creation
const noteScheme = new mongoose.Schema({
    title: String,
    description: String
})

// using schema Model is get Created
const noteModel = mongoose.model("note", noteScheme);

// export the created model to be get utilized for other files
module.exports = noteModel;