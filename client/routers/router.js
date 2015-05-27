var app = app || {};

(function () {
  'use strict';

  // Routes: used for matching views to a model or collection
  app.Router = Backbone.Router.extend({
    routes: {
      '': 'home',
      'me': 'me',
      'newworkout': 'newWorkout',
      'progress': 'progress',
      'timeline': 'timeline'
    },

    me: function() {
      new app.MeView();
      $('.js-footer.active').removeClass('active');
      $('.js-footer.js-me').addClass('active');
    },

    newWorkout: function() {
      new app.NewWorkoutView();
      $('.js-footer.active').removeClass('active');
      $('.js-footer.js-new-workout').addClass('active');
    },

    progress: function() {
      new app.ProgressView();
      $('.js-footer.active').removeClass('active');
      $('.js-footer.js-progress').addClass('active');
    },

    timeline: function() {
      new app.TimelineView();
      $('.js-footer.active').removeClass('active');
      $('.js-footer.js-timeline').addClass('active');
    }
  });

  app.router = new app.Router();

})();