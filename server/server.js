'use strict';

// Module dependencies
var express  = require('express'),
  fs         = require('fs'),
  bodyParser = require('body-parser'),
  liveServer = require('live-server'),
  api = require('./api'),
  auth = require('./util/auth'),
  http = require('http'),
  c = require('chalk');

var app = express();

// Dead-Simple Config
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);
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
app.get('/', api.showEndpoints);
app.post('/login', api.login);
app.post('/signup', api.signUp);
app.delete('/user', auth.authorizeToken, api.deleteUser);

console.log(c.blue('Started in dev') + c.green('\nApp ') + 'listening on port 8000 with live reload enabled');
  
// Start liveServer in development only
liveServer.start({
  port: 8000,
  host: '0.0.0.0',
  root: './client',
  open: true
});

// Start the server once it has become clear that nothing horrendous occured
http.createServer(app)
  .listen(app.get('port'), function () {
    console.log(c.green('\nExpress ') + 'listening on port 3000');
  });