const musicModel = require("../models/music.model")
const albumModel = require("../models/album.model")
const { uploadFile } = require("../services/storage.service")
const jwt = require("jsonwebtoken")

async function createMusic(req, res) {
    const { title } = req.body;
    const file = req.file;

    // console.log("file - " + file)
    const result = await uploadFile(file.buffer.toString('base64'))

    // console.log("result - "+ result)
    const musicData = await musicModel.create({
        uri: result.url,
        title,
        artist: req.user.id
    })

    res.status(201).json({
        message: "Music Uploaded Successfully",
        music: musicData
    })
}

async function createAlbum(req, res) {
    const { title , musics } = req.body

    const album = albumModel.create({
        title : title,
        musics : musics,
        artist : req.user.id
    })

    res.status(201).json({
        message : "Music Created successfully",
        album : album
    })
}

async function getAllMusic(req, res) {

    // populate method is used to get the referenced model data
    const musics = await musicModel.find().populate("artist", "username email")

    res.status(200).json({
        message : "All Music Fetched",
        musics : musics
    })
}
async function getAllAlbum(req, res) {
    const albums = await albumModel.find().populate("musics").populate("artist")

    res.status(200).json({
        message : "Album with musics Featched Successfully",
        albums : albums
    })
}

module.exports = { createMusic, createAlbum, getAllMusic, getAllAlbum }