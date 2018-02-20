'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _index = require('./routes/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// connect to the database
_mongoose2.default.connect('mongodb://localhost/todo-app');

// pass the routes to the app
(0, _index2.default)(app);

// catch 404
app.use(function (err, req, res, next) {
	console.log(err.stack);
	res.status(400).send('Error: ' + res.originUrl + ' not found');
	next();
});

// catch 500
app.use(function (err, req, res, next) {
	console.log(err.stack);
	res.status(500).send('Error: ' + err);
	next();
});

exports.default = app;