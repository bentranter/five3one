'use strict';

// Module dependencies
var Model = require('ampersand-model');

module.exports = Model.extend({
  type: 'user',
  props: {
    username: ['string']
  }
})