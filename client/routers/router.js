var app = app || {};

(function () {
  'use strict';

  // Routes: used for matching views to a model or collection
  app.Router = Backbone.Router.extend({
    routes: {
      '': 'home',
      'me': 'me',
      'new-workout': 'newWorkout',
      'progress': 'progress',
      'timeline': 'timeline'
    },

    me: function() {
      app.currentView.remove();
      app.currentView = new app.MeView();
    },

    newWorkout: function(id) {
      app.currentView.remove();
      app.currentView = new app.NewWorkoutView();
    },

    progress: function() {
      app.currentView.remove();
      app.currentView = new app.ProgressView();
    },

    timeline: function() {
      app.currentView.remove();
      app.currentView = new app.TimelineView();
    }


  });

  app.router = new app.Router();

})();