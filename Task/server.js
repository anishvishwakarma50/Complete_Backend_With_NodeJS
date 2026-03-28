// here we will import the instence of app to make it run
const app = require("./src/app")


// Here we gooooo...
app.listen(3000, () => {
    console.log("the server started running on port 3000")
})