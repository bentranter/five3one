var app = app || {};

(function() {
  'use strict';

  app.MeView = Backbone.View.extend({
    el: '#main',

    beforeLoginTemplate: _.template($('#meTpl').html()),
    afterLoginTemplate:  _.template($('#meTplLoggedIn').html()),

    events: {
      'click #login': 'login',
    },

    initialize: function() {
      this.render();
      this.listenTo(this.model, 'change', this.renderLoggedIn);
    },

    render: function() {
      console.log('Rendered meTpl');
      this.$el.append(this.beforeLoginTemplate());
    },

    renderLoggedIn: function() {
      console.log('Logged in');
      this.$el.html(this.afterLoginTemplate()); // replace HTML in this case
    },

    login: function(e) {
      e.preventDefault();

      var username = this.$('#username').val();
      var password = this.$('#password').val();

      this.model.save({
        username: username,
        password: password
      }, {
        success: function(model, res, opts) {
          console.log(res.token, res.iss);
        }
      });
    }
  });
})();
