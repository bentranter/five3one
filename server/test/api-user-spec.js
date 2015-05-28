'use strict';

// Module dependencies
var should  = require('should');
var assert  = require('assert');
var request = require('supertest');
var crypto = require('crypto');

function randomVal(len) {
  return crypto.randomBytes(Math.ceil(len/2))
    .toString('hex') // convert to hexadecimal format
    .slice(0,len);   // return required number of characters
}

describe('Signing Up', function() {
  var url = 'localhost:3000';

  it('should return a token, expiry time, and username of the newly signed up user', function(done) {
    var newUser = {
      username: randomVal(7) + '@example.com',
      password: 'password',
      firstName: 'FirstNameTest',
      lastName: 'LastNameTest',
      squat: 100,
      deadLift: 100,
      benchPress: 100,
      overheadPress: 100
    };

    request(url)
      .post('/signup')
      .send(newUser)
      .end(function(err, res) {
        if (err) {
          throw err;
        }
        res.should.have.property('status', 200);
        done();
      });
  });
});