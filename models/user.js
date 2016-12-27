/*
File: user.js
Description: The User schema for the application
Date: 27/12/2016
Author: Saurabh Badhwar <sbsaurabhbadhwar9@gmail.com>
*/
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name: String,
  username: String,
  password: String,
  salt: String,
  email: String,
  activation_status: Boolean,
  address: {
    line1: String,
    line2: String,
    pincode: Number,
    city: String,
    country: String
  },
  dob: Date,
  registered_on: { type: Date, default: Date.now }
});

//Validator methods
userSchema.methods.validate = function() {
  if(this.dob > Date.now())
    return false;
  return true;
};

//Query methods
userSchema.query.byUsername = function(usrname) {
  return this.find({ username: usrname });
}

userSchema.methods.byEmail = function(em) {
  return this.find({ email: em });
}

module.exports = mongoose.model('User', userSchema);
