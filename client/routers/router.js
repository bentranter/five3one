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
      new app.MeView();
    },

    newWorkout: function(id) {
      new app.NewWorkoutView();
    },

    progress: function() {
      new app.ProgressView();
    },

    timeline: function() {
      new app.TimelineView();
    }
  });

  app.router = new app.Router();

})();