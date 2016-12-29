/*
File: index.js
Description: Global configuration for the application
Created on: 29/12/2016
Author: Saurabh Badhwar <sbsaurabhbadhwar9@gmail.com>
*/

var appConfig = require('./app');

//Check the environment and setup config variables as required
var config = {};

if(appConfig.environment==appConfig.env.ENVIRONMENT_DEVELOPMENT) {
  //Database config
  config.db = {
    'host': 'localhost',
    'port': '27017',
    'username': '',
    'password': '',
    'database': 'creativehr'
  }
}
else if(appConfig.environment==appConfig.env.ENVIRONEMNT_PRODUCTION) {
  //Database config
  config.db = {
    'host': '',
    'port': '',
    'username': '',
    'password': '',
    'database': ''
  }
}
else {
  //Handle other environments
}

module.exports = config;
