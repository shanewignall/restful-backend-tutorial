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
    const newTask = new Task(req.body);

    newTask.save((err, task) => {
        if (err) {
            res.send(err);
        }

        res.json(task);
    });
};

exports.completeTask = (req, res) => {
    Task.findOneAndUpdate({
        _id: req.params.taskId
    }, req.body,
        (err, task) => {
            if (err) {
                res.send(err);
            }

            res.json(task);
        });
};

exports.deleteTask = (req, res) => {
    Task.remove({
        _id: req.params.taskId
    }, (err, task) => {
        if (err) {
            res.send(err);
        }

        res.json({
            message: `Task ${task} successfully deleted`
        });
    });
};
