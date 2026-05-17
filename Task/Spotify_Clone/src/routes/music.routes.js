const express = require("express")
const multer = require("multer")
const { authArtist } = require("../middlewares/auth.middleware")
const { createMusic, createAlbum } = require("../controllers/music.controller")
const router = express.Router()

const storage = multer.memoryStorage()
const upload = multer({
    storage : storage
})

router.post("/upload", authArtist, upload.single("music"), createMusic)
router.post("/album/create", authArtist, createAlbum)

module.exports = router