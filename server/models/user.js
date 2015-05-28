'use strict';

// Module dependencies
var bcrypt = require('bcrypt');
var c      = require('chalk');
var thinky = require(__dirname + '/../util/thinky.js');

// Keep reference to RethinkDB's utilities
var r    = thinky.r;
var type = thinky.type;

var User = thinky.createModel('User', {
  username: type.string(),
  password: type.string(),
  firstName: type.string(),
  lastName: type.string(),
  createdAt: type.date().default(r.now()),
  squat: type.number(),
  deadLift: type.number(),
  benchPress: type.number(),
  overheadPress: type.number()
  }, {
  // Make the username the primary key
  pk: 'username'
});

// Ensure index for ordering
User.ensureIndex('createdAt');

// Salt and hash the password on save
User.pre('save', function(next) {
  var user = this;

  // Salt the password
  bcrypt.genSalt(5, function(err, salt) {
    if (err) {
      console.log(c.red('Errors while generating salt: ') + err);
    }

    // Hash the password
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) {
          return console.log(c.red('Errors while hashing password: ') + err);
      } else {
          user.password = hash;
          next();
      }
    });
  });
});

module.exports = User;