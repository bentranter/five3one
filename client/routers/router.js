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
      $('.js-tpl.tpl-active').removeClass('tpl-active');
      $('.js-tpl.js-tpl-me').addClass('tpl-active');
      $('.js-footer.active').removeClass('active');
      $('.js-footer.js-me').addClass('active');
    },

    newWorkout: function() {
      $('.js-tpl.tpl-active').removeClass('tpl-active');
      $('.js-tpl.js-tpl-new-workout').addClass('tpl-active');
      $('.js-footer.active').removeClass('active');
      $('.js-footer.js-new-workout').addClass('active');
    },

    progress: function() {
      $('.js-tpl.tpl-active').removeClass('tpl-active');
      $('.js-tpl.js-tpl-progress').addClass('tpl-active');
      $('.js-footer.active').removeClass('active');
      $('.js-footer.js-progress').addClass('active');
    },

    timeline: function() {
      $('.js-tpl.tpl-active').removeClass('tpl-active');
      $('.js-tpl.js-tpl-timeline').addClass('tpl-active');
      $('.js-footer.active').removeClass('active');
      $('.js-footer.js-timeline').addClass('active');
    }
  });

  app.router = new app.Router();

})();