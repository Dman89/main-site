'use strict';
angular.module("mainSite")
.controller("indexCtrl", function($scope, $interval, $timeout, scrollService, barGraphAnimationService, servicesForSaleService) {
  // TODO: add Set timout to 1000
  setTimeout(function() {window.scrollTo(0, 0)}, 0)


var docElemOrBody = document.documentElement || document.body;
  // BACKGROUND ANIMATION
      var backgroundResize = function() {
        document.getElementById("bg").style.background = '#212121 url("../../../images/bg.jpg") repeat-x 0 0';
        var docElemOrBody = document.documentElement || document.body;
        var widthForBG = docElemOrBody.clientHeight * 1.669133771929825;
        document.getElementById("bg").style.backgroundSize = widthForBG + "px auto";
      }
      var windowResize = function(object, type, callback) {
          if (object == null || typeof(object) == 'undefined') return;
          if (object.addEventListener) {
              object.addEventListener(type, callback, false);
          } else if (object.attachEvent) {
              object.attachEvent("on" + type, callback);
          } else {
              object["on"+type] = callback;
          }
      };
        backgroundResize();
        windowResize(window, "resize", backgroundResize);
        var readjust = 0;
        $interval(function () {
          readjust += .1;
          document.getElementById("bg").style.backgroundPosition = readjust + "px 0px";
        }, 1);
});
