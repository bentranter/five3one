(function() {
  'use strict';

  var User = Backbone.Model.extend({

    // Endpoint for signing in/getting token. You can use `User.fetch` to get
    // a token
    urlRoot: '/signin',

    // Defaults for determining signed in state
    defaults: {
      email: '',
      name: '',
      signedIn: false
    },

    // Check to see if a user is signed in when the model is initialized
    initialize: function() {
      if (window.localStorage.get('token')) {
        this.model.set('signedIn', true);
      } else {
        return;
      }
    },

    // Sign in success - this should be called after a sucessful fetch
    signIn: function(token) {
      window.localStorage.set('token', user.token);
      this.model.set('signedIn', true);
    }

  });
})();