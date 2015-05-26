'use strict';

// Module dependencies
var express  = require('express'),
  fs         = require('fs'),
  bodyParser = require('body-parser'),
  Moonboots  = require('moonboots-static'),
  beefy      = require('beefy'),
  liveServer = require('live-server'),
  api = require('./api'),
  auth = require('./util/auth'),
  http = require('http'),
  path = require('path'),
  c = require('chalk');

var app = module.exports = express();

// Can't figure out NODE_ENV, just set this to 'dev' or 'prod'
var env = 'dev';

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

// Either start the app with Beefy if we're in dev, or Moonboots in prod
if (env === 'prod') {
  console.log(c.blue('Started in prod'));

  // Configure Moonboots
  var moonboots = new Moonboots({
    moonboots: {
      main: __dirname + '/../client/app.js',
      libraries: [
        __dirname + '/../node_modules/jquery/dist/jquery.js',
        __dirname + '/../node_modules/underscore/underscore.js'
      ],
      stylesheets: [
        __dirname + '/../client/style.css'
      ]
    },
    directory: __dirname + '/../dist',
    htmlSource: function(ctx) {
      var rp = ctx.resourcePrefix;
      return [
        fs.readFileSync(__dirname + '/../client/head.html', 'utf8'),
        '<link href="' + rp + ctx.cssFileName + '" rel="stylesheet" type="text/css">',
        fs.readFileSync(__dirname + '/../client/body.html', 'utf8'),
        '<script src="' + rp + ctx.jsFileName + '"></script>'
      ].join('\n');
    },
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
        root: './dist',
        open: true
      });
    }
  });
} else if (env === 'dev') {
  console.log(c.blue('Started in dev') + c.green('\nExpress ') + 'listening on port 3000' + c.green('\nBeefy bundle ') + 'listening on port 8000 with live reload enabled');
  
  // Start Beefy with live-reload enabled
  http.createServer(beefy({
    // entries: [__dirname + '/../client/app.js'],
    cwd: __dirname  + '/../client',
    live: true,
    quiet: false,
    bundlerFlags: ['-t', 'brfs'],
    unhandled: function(req, res) {
      res.writeHead(404, {});
      res.end('Idk wtf happened');
    },
    watchify: true
  })).listen(8000);

  // Start the server once it has become clear that nothing horrendous occured
  http.createServer(app)
    .listen(app.get('port'), function () {
      console.log('\nAPI listening on ' + c.green(app.get('port')));
    });
} else {
  console.log(c.red('Error: ') + 'no development env specified');
}