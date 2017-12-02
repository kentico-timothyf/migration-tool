/* eslint-disable no-console */
'use-strict';

const express = require('express'),
	path = require('path'),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	bearerToken = require('express-bearer-token'),
	cookieParser = require('cookie-parser'),
	response = require('./helpers/general/response');

const rootRoute = require('./routes/root');

const app = express();
app.use(bodyParser.text({ type: 'text/csv' }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bearerToken());
app.use(express.static(path.join(__dirname, './gui/assets'), {
	maxAge: 86400000
}));

// View engine setup
app.set('views', path.join(__dirname, './gui/views'));
app.set('view engine', 'pug');

// Routes
app.use('/', rootRoute);

app.use((error, res) => {
	response.send(res, 400, error.message);
});

module.exports = app;
