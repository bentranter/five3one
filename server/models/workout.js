'use strict';

// Module dependencies
var thinky = require(__dirname + '/../util/thinky.js');

// Keep reference to RethinkDB's utilities
var r    = thinky.r;
var type = thinky.type;

var Workout = thinky.createModel('Workout', {
  id: type.string(),
  name: type.string(), // Useful for when we add ability to create any exercise
  maxWeight: type.string(),
  week: type.number(), // weeks cycle one through 14
  createdAt: type.date().default(r.now()),
  username: type.string() // who the workout belongs to
  }, {
  // Make the username the primary key
  pk: 'username'
});

// Ensure index for ordering
Workout.ensureIndex('createdAt');

module.exports = Workout;