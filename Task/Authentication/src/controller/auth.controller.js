// This is auth Controller which is going to be utilized by routes
const userModel = require("../models/user.model")

async function register(req, res) {
    const { username, email, password } = req.body;
}

module.exports = { register }