'use strict';

// Module dependencies
var express = require('express'),
  bodyParser = require('body-parser'),
  api = require('./api'),
  auth = require('./util/auth'),
  http = require('http'),
  path = require('path'),
  c = require('chalk');

var app = module.exports = express();

// Dead-Simple Config
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Enable CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Access-Token');
  next();
});

// API Endpoints
app.get('/i', api.showEndpoints);
app.post('/login', api.login);
app.post('/signup', api.signUp);

app.delete('/user', auth.authorizeToken, api.deleteUser);
// app.get('/api/notes', auth.authorizeToken, api.listNotes);
// app.get('/api/notes/:id', auth.authorizeToken, api.getNote);
// app.delete('/api/notes/:id', auth.authorizeToken, api.deleteNote);
// app.put('/api/notes/:id', auth.authorizeToken, api.updateNote);
// app.post('/api/notes', auth.authorizeToken, api.addNote);

// Start the server
http.createServer(app)
  .listen(app.get('port'), function () {
    console.log('\nAPI listening on ' + c.green(app.get('port')));
  });