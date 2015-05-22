'use strict';

// Module dependencies
var express  = require('express'),
  bodyParser = require('body-parser'),
  Moonboots  = require('moonboots-static'),
  liveServer = require('live-server'),
  api = require('./api'),
  auth = require('./util/auth'),
  http = require('http'),
  path = require('path'),
  c = require('chalk');

var app = module.exports = express();

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

// Configure Moonboots
var moonboots = new Moonboots({
  moonboots: {
    main: './client/app.js',
    stylesheets: [
      './public/style.css'
    ]
  },
  directory: './public/www',
  verbose: false
});

// Start the server after Moonboots has finished doing its thing
moonboots.on('ready', function(err) {
  if (err) {
    console.log('Uh, something went wrong: ' + err);
  } else {
    // Start the server once it has become clear that nothing horrendous occured
    http.createServer(app)
      .listen(app.get('port'), function () {
        console.log('\nAPI listening on ' + c.green(app.get('port')));
      });

    // Start liveServer in development only
    liveServer.start({
      port: 8000,
      host: '0.0.0.0',
      root: './public/www',
      open: true
    });
  }
});