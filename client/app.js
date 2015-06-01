var app = app || {};

(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    var user = new app.User();

    // Init each view
    new app.MeView({
      model: user
    });
    new app.NewWorkoutView();
    new app.ProgressView();
    new app.TimelineView();
    
    // Start the router
    Backbone.history.start();
  });
})();