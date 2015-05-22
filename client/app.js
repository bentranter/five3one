'use strict';

// Module dependencies
var DOMReady = require('domready');
var MainView = require('./views/main');

// The app's entry point. Register global event handlers, etc in here
window.app = {
  init: function() {
    var self = this;
    // Wait for DOMReady before going wild
    DOMReady(function() {
      self.view = new MainView({ el: document.body });
    });
  }
};

window.app.init();