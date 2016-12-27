/*
File: db.js
Description: MongoDB connection holder
Date: 27/12/2016
Author: Saurabh Badhwar <sbsaurabhbadhwar9@gmail.com>
*/

//Get the required libray
var mongoose = require('mongoose');

//The connection URI
var dbURI = "mongodb://localhost/creativehr"

//make the connection and handle the errors gracefully
mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
  console.log("Connection successful to the MongoDB: " + dbURI);
});

mongoose.connection.on('error', function(err){
  console.log("Unable to connect to MongoDB instance: " + err);
});

mongoose.connection.on('disconnected', function(){
  console.log("Connection closed to the MongoDB instance: " + dbURI);
});

//Close the connection when the process ends
process.on('SIGINT', function(){
  mongoose.connection.close(function(){
    console.log("Closing mongodb connection");
    process.exit(0);
  });
})
