// This is auth Controller which is going to be utilized by routes
const userModel = require("../models/user.model")
// let's require the jwt package
const jwt = require("jsonwebtoken")

async function register(req, res) {
    const { username, email, password } = req.body;

    const userData = await userModel.create({
        username : username,
        email : email,
        password : password
    })

    const token = jwt.sign({
        id: userData._id
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        message: "User Registered successfully",
        user: userData
    })
}

module.exports = { register }