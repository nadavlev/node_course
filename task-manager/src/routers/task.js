const express = require('express')
const router = express.Router();
const Task = require('../models/task')

router.post('/tasks', async (req, res) => {
    const task = new Task(req.body);
    try {
        res.status(201).send(await task.save());
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
})

router.get('/tasks', async (req, res) => {
    try {
        res.send(await Task.find({}));
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
})

router.get('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).send();
        }
        res.send(task);
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
})

router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['description', "isDone"];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({error: "Operation is not valid"});
    }

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        if (!task) {
            res.status(404).send();
        }
        res.send(task);
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
})

router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).send({});
        }
        res.send(task);
    }catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
})

module.exports = router;
