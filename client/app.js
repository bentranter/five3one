'use strict';

// Module dependencies
var MainView = require('./views/main');
var Me       = require('./models/me');

// The app's entry point. Register global event handlers, etc in here
window.app = {
  init: function() {

    // Initialize user model
    window.me = new Me();

    document.addEventListener('DOMContentLoaded', function() {
      self.view = new MainView({ el: document.body });
    })
    var self = this;
  }
};

window.app.init();