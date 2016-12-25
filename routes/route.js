/*
File: route.js
Description: Routes file for the Creative HR project.
Date: 25/12/2016
Author: Saurabh Badhwar <sbsaurabhbadhwar9@gmail.com>
*/
module.exports = (function() {
  'use strict';
  var router = require('express').Router();

  router.get('/', function(req, res) {
    res.json({'text':'hello'});
  });

  return router;
})();
