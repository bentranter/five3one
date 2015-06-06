var app = app || {};

(function() {
  'use strict';

  app.User = Backbone.Model.extend({

    // Endpoint for signing in/getting token. You can use `User.fetch` to get
    // a token
    urlRoot: 'http://0.0.0.0:3000/login',

    // Defaults for determining signed in state
    defaults: {
      username: '',
      name: '',
      signedIn: false
    },

    // Check to see if a user is signed in when the model is initialized
    initialize: function() {
      if (window.localStorage.getItem('token')) {
        // app.user.set({'signedIn': true});
      } else {
        return;
      }
    },

    // Sign in success - this should be called after a sucessful fetch
    signIn: function(token) {
      window.localStorage.setItem('token', token);
      // app.user.set({'signedIn': true});
    }

  });
})();
