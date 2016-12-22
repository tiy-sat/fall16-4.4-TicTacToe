// Need to include jquery so that we can use it in later lines
//   ALL REQUIRES GO AT TOP OF JS FILE
var $ = require("jquery");

// Calling intial JQUERY factory
//   Which is the same as waiting for DOMContentLoaded (but better)
$(function(){
  // Create reference to parent of EVERY ELEMENT
  //   So that we can use `.find()` method for all future ELEMENT
  //     variables... to save memory and have less repetition
  var $body = $("[data-js='body']");
  // Create references for all elements we will attach listeners to
  //   By way of `$body.find()`
  var $squareElements = $body.find("[data-js='square']");
  var clicksNumber = 0;
  $squareElements.on("click",function(){
    // REDEFINE `THIS` || aka Scope to somethign we understand
    //   AND give it jquery super powers
    var $clickedSquareElement = $(this);

    // Adding +1 to the clicks number
    clicksNumber++;

    // MODULO tests a division and gives us the remainder
    //   by dividing with 2 a remainder of 1 would signify an odd number
    if(clicksNumber%2 === 1){
      // Number is odd
      // Use clicked element reference to add class for x
      $clickedSquareElement.addClass("square--x");
    }else{
      // number is even
      // Use clicked element reference to add class for o
      $clickedSquareElement.addClass("square--o");
    }
  });
})
