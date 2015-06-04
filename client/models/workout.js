var app = app || {};

(function() {
  'use strict';

  app.Workout = Backbone.Model.extend({
    defaults: {
      id: '',
      name: '',
      maxWeight: '',
      week: 0,
      createdAt: '',
      username:''
    }
  });
})();