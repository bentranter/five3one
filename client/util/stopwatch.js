var app = app || {};

(function() {
  'use strict';

  app.Stopwatch = function() {

    var timer = 0;
    var startTime = 0;
    var lapTime = 0;
    var now = function() {
      return (new Date().getTime());
    };

    // If start time exists, start from there, otherwise start at 0
    this.start = function() {
      startTime = startTime ? startTime : now();
    };

    // Stop or pause, and set the lap time to the new start time
    this.stop = function() {
      lapTime = startTime ? lapTime + now() - startTime : lapTime;
      startTime = 0;
    };

    // Reset the lap time and start time
    this.reset = function() {
      lapTime = 0;
      startTime = 0;
    };

    // Get the current elapsed time
    this.time = function() {
      return lapTime + (startTime ? now() - startTime : 0);
    };

    this.startTimer = function() {
      //
    };
  };
})();