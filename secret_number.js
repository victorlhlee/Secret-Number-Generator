//'use strict';

//Get a random number between 0 and 1000000 (inclusive)
module.exports = function() {

  var secretNumberGenerator = Math.floor(Math.random() * 1000000); 
  //math.floor() returns the largest integer less than or equal to a given number
  //math.random() returns a random number from 0 (inclusive) up to but not including 1 (exclusive)
  return function(){
    return secretNumberGenerator;
  }; 
};