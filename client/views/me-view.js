var app = app || {};

(function() {
  'use strict';

  app.MeView = Backbone.View.extend({
    el: '#main',

    template: _.template($('#meTpl').html()),

    initialize: function() {
      this.render();
    },

    render: function() {
      console.log('Rendered meTpl');
      this.$el.html(this.template());
    }
  });
})();