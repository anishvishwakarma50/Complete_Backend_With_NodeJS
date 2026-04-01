// instance of App
const app = require("./src/app")
// connection method to connect database
const connectDB = require("./src/db/db")

// for performing CRUD in note model we require Note model
const noteModel = require("./src/models/note.model")
connectDB()

// Now Here we need to write the API's which are going to do the all those CRUD operations are required

// POST - /notes - for creating a note
app.post("/notes", async (req, res) => {
    // capture the data from body
    const data = req.body;
    // as it is an asyncronous method it requires async and await
    await noteModel.create({
        title: data.title,
        description: data.description
    })

    res.status(201).json({
        message: "Note is Created"
    })
})

// GET - /notes - For fetching all the record from collection
app.get("/notes", async (req, res) => {
    // the find method returns the array of object
    const notesData = await noteModel.find();

    res.status(200).json({
        message: "All Notes",
        notes: notesData
    })
})

// Delete - /notes/:id - For Deleting a perticular record from collection
app.delete("/notes/:id", async (req, res) => {
    // capture id from Params
    const id = req.params.id;

    // lets try to directly delete the record
    await noteModel.findByIdAndDelete(id);

    res.status(200).json({
        message: "Data is Deleted"
    })
})

// PATCH - /notes/:id - For Editing a record from collection
app.patch("/notes/:id", async (req, res) => {
    // capture the id from Params
    const id = req.body.id;
    // capture data from body
    const data = req.body;

    // Update the record by finding it
    await noteModel.findOneAndUpdate({
        _id: id
    }, {
        description: data.description
    })

    res.status(200).json({
        message: "Note Updated Successfully"
    })
})

app.listen(3000, () => {
    console.log("Server Started Running...")
})