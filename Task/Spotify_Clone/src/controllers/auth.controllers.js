const jwt = require("jsonwebtoken")
const userModel = require("../models/user.model")
const bcrypt = require("bcryptjs")

async function register(req, res) {
    // if role isn't passed then it must have a default value
    const { username, email, password, role = "user" } = req.body

    // This will create problem because it will look for both condition to be get satisfied
    // const isUserExist = userModel.findOne({email, username})
    // here is the actual way to do it
    const isUserExist = await userModel.findOne({
        $or : [
            { username },
            { email }
        ]
    })

    if(isUserExist) {
        res.status(409).json({
            message: "User Already Exist"
        })
    }

    if(!isUserExist) {

        // Before storing password to the database we need to hash the password due to security reasons
        const hash = await bcrypt.hash(password, 10)

        const user = await userModel.create({
            username: username,
            email: email,
            password: hash,
            role: role
        })

        const token = jwt.sign({
            id : user._id,
            role : user.role
        }, process.env.JWT_SECRET)

        res.cookie("token", token)

        res.status(201).json({
            message: "User Registered Successfully",
            user: {
                username : user.username,
                email : user.email,
                role : user.role
            }
        })
    }
}

async function login(req, res) {
    const { username, email, password } = req.body

    const user = await userModel.findOne({
        $or : [
            {username},
            {email}
        ]
    })

    if(!user) {
        return res.status(404).json({
            message: "User not Found"
        })
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password)

    if(isPasswordCorrect) {
        const token = jwt.sign({
            id : user._id,
            role : user.role
        }, process.env.JWT_SECRET)

        res.cookie("token", token)

        return res.status(200).json({
            message : "User Logged in Successfully",
            user : {
                username : user.username,
                email : user.email,
                role : user.role
            }
        })
    } else {
        return res.status(409).json({
            message : "Incorrect Password"
        })
    }
}

module.exports = { register, login }