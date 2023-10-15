const express = require('express');
const Model = require('../model/notes.js');

const router = express.Router()

//for post 
router.post('/', async (req, res) => {
    const data = new Model({
        title: req.body.title,
        description: req.body.description
    })

    try {
        const dataToSave = await data.save();
        res.json({ Status: "Success", dataToSave })
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});


//Get all Method
router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.send(data);

    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
});


//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findById({_id:req.params.id});
        res.send(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
});


//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});


//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.title} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;