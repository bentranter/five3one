var app = app || {};

(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {

    // Init each view
    new app.MeView();
    new app.NewWorkoutView();
    new app.ProgressView();
    new app.TimelineView();
    
    // Start the router
    Backbone.history.start();
  });
})();