/*
File: index.js
Description: Serves the application entrypoint. Runs the server and serves the
             requests.
Date: 25/12/2016
Author: Saurabh Badhwar <sbsaurabhbadhwar9@gmail.com>
*/

//Setup dependencies, get the routes and express module
var db =  require('./models/db');
var routes = require('./routes');
var express = require('express');

//Setup paths
var paths = {
  'views': __dirname + '/views/'
};

//Setup the application
var app = express();
app.paths = paths;
app.use('/static', express.static('static'));

//Setup view engine
app.set('view engine', 'jade');

//Setup the server start callback
//Setup the port and host and get the application running
var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || 8000;
var startServer = function() {
  //Setup the routes for the application
  routes.set(app);
  //Start listening
  app.listen(port, host, function(){
    console.log("Captain! We are up and running on " + host + ":" + port);
  });
};
//Connect to the database
db.createConnection(app, startServer);
