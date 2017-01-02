/*
File: main.js
Description: The main javascript resource file for the website
Date: 02/01/2017
Author: Saurabh Badhwar <sbsaurabhbadhwar9@gmail.com>
*/
$(document).ready(function(){
  //Setup the rotating text
  $("span.rotate-text, span.rotate-text-services").Morphext({
    animation: "bounceIn",
    separator: "|",
    speed: 1500
  });
});
