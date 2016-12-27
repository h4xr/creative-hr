/*
File: index.js
Description: Routing entrypoint for the application
Date: 27/12/2017
Author: Saurabh Badhwar <sbsaurabhbadhwar9@gmail.com>
*/
var users = require('./users.js');

module.exports.set = function(app) {
  app.get('/', function(req, res) {
    res.json({'text':'hello'});
  })

  users.set(app);
}
