var app = app || {};

(function() {
  'use strict';

  app.TimelineView = Backbone.View.extend({
    el: '#main',

    template: _.template($('#timelineTpl').html()),

    initialize: function() {
      this.render();
    },

    render: function() {
      console.log('Rendered timeline');
      this.$el.html(this.template());
    }
  });
})();