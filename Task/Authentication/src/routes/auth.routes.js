// This is file is totally responsible for defining the auth routes using router from express 
const express = require("express")
const authController = require("../controller/auth.controller")

const router = express.Router()

router.post("/register", authController.register)
router.get("/test", (req, res) => {
    // we can directly access them as shown below
    console.log("token : ", req.cookies)
    res.json({
        token: req.cookies
    })
})

module.exports = router