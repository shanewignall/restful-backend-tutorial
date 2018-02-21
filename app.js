import express from 'express';
import mongoose from 'mongoose';

import routes from './routes/index.js';

const app = express();

/**
 * Connect to the database
 */

mongoose.connect('mongodb://localhost');

/**
 * Register the routes
 */

routes(app);

/**
 * Middleware
 */

// catch 400
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
