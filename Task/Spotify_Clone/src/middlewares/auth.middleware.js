const jwt = require("jsonwebtoken")

async function authArtist(req, res, next) {
    const token = req.cookies.token

    if(!token) {
        return res.status(401).json({ message : "Not logged in. Login Again " })
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
            message : "Unauthorized !"
        })
    }
}

async function authUser(req, res, next) {
    const token = req.cookies.token

    if(!token) {
        res.status(401).json({
            message : "Unauthenticated User"
        })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    if(decoded.role !== "user" || decoded.role !== "artist") {
        res.status(401).json({
            message : "Unauthorised User"
        })
    }

    next()
}

module.exports = { authArtist, authUser }