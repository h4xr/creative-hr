/*
File: db.js
Description: MongoDB connection holder
Date: 27/12/2016
Author: Saurabh Badhwar <sbsaurabhbadhwar9@gmail.com>
*/

//Get the required library
var mongo = require('mongodb');

//We need database configuration for things to work properly
var config = require('../config');

//Setup the uri string
if(config.db.username != '') {
  var dbURI = 'mongodb://'+ config.db.username + ':' + config.db.password + '@' + config.db.host + ':' + config.db.port + '/' + config.db.database;
}
else {
  var dbURI = 'mongodb://' + config.db.host + ':' + config.db.port + '/' + config.db.database;
}

//Connect with mongodb
var mongo = require('mongodb');
var mongoClient = mongo.MongoClient;

var database = {};

module.exports.createConnection = function(app, callback) {
  mongoClient.connect(dbURI, function(err, db) {
    if(err) {
      console.log("Unable to connect to MongoDB server", err);
    }
    else {
      console.log("Connection established with mongodb");
      app.db = db;
      callback();
    }
  });
};
