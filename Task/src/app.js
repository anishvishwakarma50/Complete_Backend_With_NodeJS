// Here We Create the instance of app and export it
const express = require('express')

// create instance of server using the name app
const app = express()

// This allows app to understand json
app.use(express.json())

const notes = [];

// title, description
// POST /notes
app.post("/notes", (req, res) => {
    notes.push(req.body);
    res.status(201).json({
        message: "notes created successfully"
    })
})

// GET /notes
app.get("/notes",(req, res) => {
    res.status(200).json({
        message: "notes fetched successfully",
        notes: notes
    });
})

// PATCH /notes/:index
app.patch("/notes/:index", (req, res) => {
    const index = req.params.index;
    const description = req.body.description;

    notes[index].description = description;
    res.status(200).json({
        message: "Notes Updated Successfully"
    })
})

// DELETE /notes/$id
app.delete("/notes/:index", (req, res) => {
    const index = req.params.index;
    delete notes[index]

    res.status(200).json({
        message : "Note Deleted Successfully"
    })
})


// lets export this server so that it can be get utilized
module.exports = app;