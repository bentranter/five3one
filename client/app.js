'use strict';

// Module dependencies
var DOMReady = require('domready');
var MainView = require('./views/main');
var Me       = require('./models/me');

// The app's entry point. Register global event handlers, etc in here
window.app = {
  init: function() {
    window.me = new Me();
    var self = this;
    // Wait for DOMReady before going wild
    DOMReady(function() {
      self.view = new MainView({ el: document.body });
    });
  }
};

window.app.init();