// This is file is totally responsible for defining the auth routes using router from express 
const express = require("express")
const authController = require("../controller/auth.controller")

const router = express.Router()

router.post("/register", authController.register)

module.exports = router