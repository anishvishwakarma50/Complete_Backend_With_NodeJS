// This is auth Controller which is going to be utilized by routes
const userModel = require("../models/user.model")
// let's require the jwt package
const jwt = require("jsonwebtoken")

async function register(req, res) {
    const { username, email, password } = req.body;

    // Before creating user we must check whether the user exist or not
    const isUserExist = await userModel.findOne({email})

    // if True then it will stop here and send the response
    if(isUserExist) {
        return res.status(409).json({
            message: "User Already exist"
        })
    }

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