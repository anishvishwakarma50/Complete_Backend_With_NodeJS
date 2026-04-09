// this is just a simple dummy Api to learn verification of user using token
const express = require("express")
const jwt = require("jsonwebtoken")
const userModel = require("../models/user.model")

const router = express.Router()

router.post("/create-post", async (req, res) => {
    const token = req.cookies.token

    if(!token) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    }

    try {
        // if this token is valid it will return the decoded data which was encoded in this
        const decode = jwt.verify(token, process.env.JWT_SECRET)

        // based on decoded data we can find the user details from their model
        const user = await userModel.findOne({
            _id: decode.id
        })

        res.status(201).json({
            messge: "post created Successfully",
            user : user
        })
    } catch (err) {
        return res.status(409).json({
            message: "Token is invailid"
        })
    }
})

module.exports = router