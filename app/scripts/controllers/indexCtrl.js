'use strict';
angular.module("mainSite")
.controller("indexCtrl", function($scope, $interval, $timeout, scrollService, barGraphAnimationService, servicesForSaleService, portfolioService) {

  setTimeout(function() {window.scrollTo(0, 0)}, 1000)
  setTimeout(function() {window.scrollTo(0, 0)}, 1500)

var docElemOrBody = document.documentElement || document.body;
  // BACKGROUND ANIMATION
      // var backgroundResize = function() {
      //   document.getElementById("bg").style.background = '#212121 url("../../../images/bg.jpg") repeat-x 0 0';
      //   var docElemOrBody = document.documentElement || document.body;
      //   var widthForBG = docElemOrBody.clientHeight * 1.669133771929825;
      //   document.getElementById("bg").style.backgroundSize = widthForBG + "px auto";
      // }
      var backgroundResize = function() {
        document.getElementById("bg").style.background = '#212121 url("../../../images/bg.jpg") repeat-x 0 0';
        let elem = document.getElementById("bg");
        let widthForBG = elem.offsetHeight * 1.669133771929825;
        document.getElementById("bg").style.backgroundSize = "cover";
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
        let readjust = 0;
        $interval(function () {
          readjust += .1;
          document.getElementById("bg").style.backgroundPosition = readjust + "px 0px";
        }, 1);

        $scope.portfolio = portfolioService.portfolio;
});
