import express from 'express';
import mongoose from 'mongoose';

import routes from './routes/index.js';

const app = express();

// connect to the database
mongoose.connect('mongodb://localhost/todo-app');

// pass the routes to the app
routes(app);

// catch 404
app.use((err, req, res, next) => {
	console.log(err.stack);
	res.status(400).send(`Error: ${res.originUrl} not found`);
	next();
});

// catch 500
app.use((err, req, res, next) => {
	console.log(err.stack)
	res.status(500).send(`Error: ${err}`);
	next();
});

export default app;
