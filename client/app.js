var app = app || {};

(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {

    app.user = new app.User();

    // Init each view
    new app.MeView({
      model: app.user 
    });
    new app.NewWorkoutView();
    new app.ProgressView();
    new app.TimelineView();
    
    // Start the router
    Backbone.history.start();
  });
})();
