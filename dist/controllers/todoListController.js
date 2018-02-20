'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _todoListModel = require('../models/todoListModel.js');

var _todoListModel2 = _interopRequireDefault(_todoListModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.getTask = function (req, res) {
    _todoListModel2.default.findById(req.params.taskId, function (err, task) {
        if (err) {
            res.send(err);
        }

        res.json(task);
    });
};

exports.getAllTasks = function (req, res) {
    _todoListModel2.default.find({}, function (err, tasks) {
        if (err) {
            res.send(err);
        }

        res.json(tasks);
    });
};

exports.createTask = function (req, res) {
    var newTask = new _todoListModel2.default(req.body.text);

    _todoListModel2.default.create(newTask, function (err, task) {
        if (err) {
            res.send(err);
        }

        res.json(task);
    });
};

exports.completeTask = function (req, res) {
    _todoListModel2.default.create({
        complete: true
    }, function (err, todo) {
        if (err) {
            res.send(err);
        }

        res.json(todo);
    });
};

exports.deleteTask = function (req, res) {
    _todoListModel2.default.remove({
        id: req.params.taskId
    }, function (err, todo) {
        if (err) {
            res.send(err);
        }

        res.json({ message: 'Task ' + task.id + ' successfully deleted' });
    });
};