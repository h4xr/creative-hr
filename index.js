/*
File: index.js
Description: Serves the application entrypoint. Runs the server and serves the
             requests.
Date: 25/12/2016
Author: Saurabh Badhwar <sbsaurabhbadhwar9@gmail.com>
*/

//Setup dependencies, get the routes and express module
var mongoose =  require('./models/db');
var routes = require('./routes');
var express = require('express');

//Setup paths
var paths = {
  'views': __dirname + '/views/'
};

//Setup the application
var app = express();

//Setup the routes for the application
routes.set(app);

//Setup the port and host and get the application running
var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || 8000;
app.listen(port, host, function(){
  console.log(mongoose);
  console.log("Captain! We are up and running on " + host + ":" + port);
  console.log(paths.views);
});
