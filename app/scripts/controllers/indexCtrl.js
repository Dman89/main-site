'use strict';
angular.module("mainSite")
.controller("indexCtrl", function($scope, $interval, $timeout, $location, scrollService, $state, barGraphAnimationService, servicesForSaleService, portfolioService, unlockService) {
  let docElemOrBody = document.documentElement || document.body;
  setTimeout(function() {window.scrollTo(0, 0)}, 1000)

  setTimeout(function() {
    window.scrollTo(0, 0);
    unlockService.runEventListener();
    removeEventsAndGo('lockButton');
    removeEventsAndGo('lockButton2');
    window.addEventListener('scroll', scrollService.scrolling)
  }, 1500);
  var locationChangeContact = function() {
    $state.go('contact');
  }
  var removeEventsAndGo = function(elem) {
    let element = document.getElementById(elem);
    element.addEventListener('click', function() {
      window.removeEventListener('resize', backgroundResize, true);
      clearInterval(movingBG);
      window.removeEventListener('scroll', scrollService.scrolling)
      locationChangeContact();
    });
  }
  let readjust = 0;
  var moveBackground = function () {
    readjust += .1;
    document.getElementById("bg").style.backgroundPosition = readjust + "px 0px";
  }
  var movingBG;
  var backgroundResize = function() {
    if ($location.path() === '/') {
      if (docElemOrBody.clientWidth >= 700 && docElemOrBody.clientHeight >= 700) {
        movingBG = setInterval(moveBackground, 1);
      }
      document.getElementById("bg").style.background = '#212121 url("../../../images/bg.jpg") repeat-x 0 0';
      let elem = document.getElementById("bg");
      let widthForBG = elem.offsetHeight * 1.669133771929825;
      document.getElementById("bg").style.backgroundSize = "cover";
    }
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
        $scope.portfolio = portfolioService.portfolio;
});
