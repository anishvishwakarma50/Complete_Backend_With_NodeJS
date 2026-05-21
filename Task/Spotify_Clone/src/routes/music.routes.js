const express = require("express")
const multer = require("multer")
const { authArtist, authUser } = require("../middlewares/auth.middleware")
const { createMusic, createAlbum, getAllMusic, getAllAlbum } = require("../controllers/music.controller")
const router = express.Router()

const storage = multer.memoryStorage()
const upload = multer({
    storage : storage
})

router.post("/upload", authArtist, upload.single("music"), createMusic)
router.post("/album/create", authArtist, createAlbum)
router.get("/", authUser, getAllMusic)
router.get("/albums", authUser, getAllAlbum)

module.exports = router