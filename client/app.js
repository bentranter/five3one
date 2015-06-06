var app = app || {};

(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {

    // Init each view
    new app.MeView({
      model: new app.User() 
    });
    new app.NewWorkoutView();
    new app.ProgressView();
    new app.TimelineView();
    
    // Start the router
    Backbone.history.start();
  });
})();
