'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _todoListController = require('../controllers/todoListController');

var _todoListController2 = _interopRequireDefault(_todoListController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
    app.route('/todo').get(_todoListController2.default.getAllTasks).post(_todoListController2.default.createTask);

    app.route('/todo/:taskId').get(_todoListController2.default.getTask).put(_todoListController2.default.completeTask).delete(_todoListController2.default.deleteTask);
};