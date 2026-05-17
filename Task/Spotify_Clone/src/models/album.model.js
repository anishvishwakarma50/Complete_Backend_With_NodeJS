const mongoose = require("mongoose")

const albumSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    musics : {
        type : mongoose.Types.ObjectId,
        ref : "music"
    },
    artist : {
        type : mongoose.Types.ObjectId,
        ref : "user"
    }
})

const albumModel = mongoose.model("album", albumSchema)

module.exports = albumModel