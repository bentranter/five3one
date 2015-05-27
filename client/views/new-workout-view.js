var app = app || {};

(function() {
  'use strict';

  app.NewWorkoutView = Backbone.View.extend({
    el: '#main',

    template: _.template($('#newWorkoutTpl').html()),

    events: {
      'click .js-circle': 'toggleCircle',
      'click #selectWorkout': 'showWorkoutDropdown'
    },

    initialize: function() {
      this.render();
    },

    render: function() {
      console.log('Rendered new workout');
      this.$el.html(this.template());
    },

    toggleCircle: function(e) {
      e.target.classList.toggle('js-circle-filled-in');
    },

    showWorkoutDropdown: function() {
      $('#workoutDropdown').toggleClass('hide');
    }
  });
})();