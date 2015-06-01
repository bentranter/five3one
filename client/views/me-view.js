var app = app || {};

(function() {
  'use strict';

  app.MeView = Backbone.View.extend({
    el: '#main',

    template: _.template($('#meTpl').html()),

    events: {
      'click #login': 'login',
    },

    initialize: function() {
      this.render();
      this.listenTo(this.model, 'change', this.render);
    },

    render: function() {
      console.log('Rendered meTpl');
      this.$el.append(this.template());
    },

    login: function(e) {
      e.preventDefault();

      var username = this.$('#username').val();
      var password = this.$('#password').val();

      this.model.signIn();

      this.model.save({
        username: username,
        password: password
      }, {
        success: function(model, res, opts) {
          console.log(res.token); 
        }
      });
    }
  });
})();