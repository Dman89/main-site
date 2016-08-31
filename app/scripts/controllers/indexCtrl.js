'use strict';
angular.module("mainSite")
.controller("indexCtrl", function($scope) {
  var backgroundResize = function() {
    console.log("Ran");
    var widthForBG = document.documentElement.clientHeight * 1.669133771929825;
    document.getElementById("bg").style.backgroundRepeat = "repeat-x";
    document.getElementById("bg").style.backgroundSize = widthForBG + "px auto";
    document.getElementById("bg").style.width = widthForBG + "px";
  }
  var addEvent = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
  };
});
