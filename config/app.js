/*
File: app.js
Description: Application specific constants and settings
Created on: 29/12/2016
Author: Saurabh Badhwar <sbsaurabhbadhwar9@gmail.com>
*/

//Define the application
var application = {};

//Define the environment variables
application.env = {};
application.env.ENVIRONMENT_DEVELOPMENT = 0;
application.env.ENVIRONEMNT_PRODUCTION = 1;
application.env.ENVIRONEMENT_TESTING = 2;

//Supported Databases
application.db = {};
application.db.DATABASE_MONGODB = 0;

//Configuration for logger
application.logging = {};
application.logging.LOGGER_ENABLED = 1;
application.logging.LOGGER_DISABLED = 0;

//Current application specific settings
application.environment = application.env.ENVIRONMENT_DEVELOPMENT;

module.exports = application;
