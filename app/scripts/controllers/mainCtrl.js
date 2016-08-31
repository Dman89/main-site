'use strict';
angular.module("mainSite")
.controller("mainCtrl", function($scope) {
  var backgroundResize = function() {
    console.log("Ran");
    var widthForBG = document.documentElement.clientHeight * 1.669133771929825;
    document.getElementById("bg").style.backgroundRepeat = "repeat-x";
    document.getElementById("bg").style.backgroundSize = widthForBG + "px auto";
    document.getElementById("bg").style.width = widthForBG + "px";
  }
  backgroundResize();
});
