const jwt = require("jsonwebtoken")

async function authArtist(req, res, next) {
    const token = req.cookies.token

    if(!token) {
        return res.status(401).json({ message : "Not logged in" })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(decoded.role !== "artist") {
            res.status(403).json({
                message : "You are not an Artist."
            })
        }

        req.user = decoded
        next()

    } catch (error) {
        res.status(401).json({
            message : "Unauthorized!"
        })
    }
}

module.exports = { authArtist }