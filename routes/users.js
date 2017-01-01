/*
File: users.js
Description: Users controller. Defines routes important for performing user
             based actions.
Date: 27/12/2016
Author: Saurabh Badhwar <sbsaurabhbadhwar9@gmail.com>
*/
module.exports.set = function(app) {
  //Setup the collection
  var collection = app.db.collection('users');

  app.get('/users', function(req, res){
    var u = {
      name: "Saurabh Badhwar",
      username: "sbadhwar",
      password: "hello",
      salt: "hdggd",
      email: "sbsaurabhbadhwar9@gmail.com",
      activation_status: true,
      address: {
        line1: "104",
        line2: "State Bank COlony",
        pincode: "110009",
        city: "Delhi",
        country: "India"
      },
      dob: new Date(1995, 08, 18)
    };
    collection.insert(u, function(err, r){
      if(!err) {
        console.log("No error");
      }
      else {
        console.log("error");
      }
    });
    res.send("hello");
  });

  app.get('/users/test', function(req, res) {
    res.json({'text':'hi'});
  });
}
