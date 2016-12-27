/*
File: users.js
Description: Users controller. Defines routes important for performing user
             based actions.
Date: 27/12/2016
Author: Saurabh Badhwar <sbsaurabhbadhwar9@gmail.com>
*/

module.exports.set = function(app) {
  app.get('/users', function(req, res){
    res.json({'text':'user'});
  })
}
