'use strict';

// Module dependencies
var View = require('ampersand-view');
var domthingMixin = require('ampersand-domthing-mixin');

module.exports = View.extend(domthingMixin).extend({
  template: require('../templates/main'),
  autoRender: true
});