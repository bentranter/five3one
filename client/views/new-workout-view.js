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
      // Just append the template to the main view, since the router toggles visibility
      this.$el.append(this.template());
    },

    toggleCircle: function(e) {
      e.target.classList.toggle('js-circle-filled-in');
    },

    showWorkoutDropdown: function() {
      $('#workoutDropdown').toggleClass('hide');
    }
  });
})();