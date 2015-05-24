'use strict';

// Module dependencies
var View        = require('ampersand-view');
var mainViewTpl = require('../templates/main-view.html');

module.exports = View.extend({
  template: mainViewTpl,
  autoRender: true
});