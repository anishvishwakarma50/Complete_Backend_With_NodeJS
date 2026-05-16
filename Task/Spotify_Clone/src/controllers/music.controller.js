const musicModel = require("../models/music.model")
const { uploadFile } = require("../services/storage.service")
const jwt = require("jsonwebtoken")

async function createMusic(req, res) {
    const token = req.cookies.token;

    if(!token) {
        return res.status(401).json({ message : "Unauthorized" })
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)

        if(decode.role !== "artist") {
            return res.status(401).json({ message : "Access Denied!" })
        }

        const { title } = req.body;
        const file = req.file;

        const result = await uploadFile(file.buffer.toString('base64'))

        const musicData = await musicModel.create({
            uri: result.url,
            title,
            artist: decode.id
        })

        res.status(201).json({
            message: "Music Uploaded Successfully",
            music: musicData
        })
    } catch(err) {
        return res.status(401).json({ message : "Unauthorized!" })
    }
}

module.exports = { createMusic }