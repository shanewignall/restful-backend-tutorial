import mongoose from 'mongoose';

import Task from '../models/todoListModel.js';

exports.getTask = (req, res) => {
    Task.findById(req.params.taskId, (err, task) => {
        if (err) {
            res.send(err);
        }

        res.json(task);
    });
};

exports.getAllTasks = (req, res) => {
    Task.find({}, (err, tasks) => {
        if (err) {
            res.send(err);
        }

        res.json(tasks);
    });
};

exports.createTask = (req, res) => {
    const newTask = new Task(req.body.text);

    Task.create(newTask, (err, task) => {
        if (err) {
            res.send(err);
        }

        res.json(task);
    });
};

exports.completeTask = (req, res) => {
    Task.create({
        complete: true
    }, (err, todo) => {
        if (err) {
            res.send(err);
        }

        res.json(todo);
    });
};

exports.deleteTask = (req, res) => {
    Task.remove({
        id: req.params.taskId
    }, (err, todo) => {
        if (err) {
            res.send(err);
        }

        res.json({ message: `Task ${task.id} successfully deleted` });
    });
};

