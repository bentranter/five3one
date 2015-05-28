var app = app || {};

(function() {
  'use strict';

  app.ProgressView = Backbone.View.extend({
    el: '#main',

    template: _.template($('#progressTpl').html()),

    initialize: function() {
      this.render();
    },

    render: function() {
      console.log('Rendered progress');
      this.$el.append(this.template());
    }
  });
})();