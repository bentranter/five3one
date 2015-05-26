var app = app || {};

(function () {
  'use strict';

  // Routes: used for matching views to a model or collection
  var Router = Backbone.Router.extend({
    routes: {
      '': 'home',
      'me': 'me',
      'new-workout': 'newWorkout',
      'progress': 'progress',
      'timeline': 'timeline'
    },

    me: function() {
      
    },

    newWorkout: function(id) {
      
    },

    progress: function() {

    },

    timeline: function() {

    }
  });

  app.router = new Router();

})();