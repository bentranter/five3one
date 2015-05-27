var app = app || {};

(function() {
  'use strict';

  app.NewWorkoutView = Backbone.View.extend({
    el: '#main',

    template: _.template($('#newWorkoutTpl').html()),

    initialize: function() {
      this.render();
    },

    render: function() {
      console.log('Rendered new workout');
      this.$el.html(this.template());
    }
  });
})();