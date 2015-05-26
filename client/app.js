var app = app || {};

(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {

    // Start the app any view, so that our remove function works
    app.currentView = new app.TimelineView();

    // Start the router
    Backbone.history.start();
  });
})();