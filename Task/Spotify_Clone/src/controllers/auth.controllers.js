const jwt = require("jsonwebtoken")
const userModel = require("../models/user.model")

async function register(req, res) {
    const { username, email, password, role } = req.body()

    const isUserExist = userModel.findOne({email})

    if(!isUserExist) {
        const user = await userModel.create({
            username: username,
            email: email,
            password: password,
            role: role
        })

        const token = jwt.sign({
            id : user._id,
        }, process.env.JWT_SECRET)

        res.cookie("token", token)

        res.status(201).json({
            message: "User Registered Successfully",
            user: user
        })
    }
}

module.exports = { register }