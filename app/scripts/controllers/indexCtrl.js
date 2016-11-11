'use strict';
angular.module("mainSite")
.controller("indexCtrl", function($scope, $interval, $timeout, $location, scrollService, $state, barGraphAnimationService, servicesForSaleService, portfolioService, unlockService, resumeService) {
  $scope.resumeArray = resumeService.resumeArray;
  var docElemOrBodyForIndex = document.documentElement || document.body;
  var firstLoadAnimationBG = true;
  var fakeVar = 'fake';
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
    var element = document.getElementById(elem);
    element.addEventListener('click', function() {
      window.removeEventListener('resize', backgroundResize, true);
      clearInterval(movingBG);
      locationChangeContact();
      window.removeEventListener('scroll', scrollService.scrolling)
    });
  }
  var readjust = 0;
  var moveBackground = function () {
    readjust += .1;
    document.getElementById("bg").style.backgroundPosition = readjust + "px 0px";
  }
  var movingBG;
  var backgroundResize = function() {
    if ($location.path() === '/') {
      if (docElemOrBodyForIndex.clientWidth >= 600 && docElemOrBodyForIndex.clientHeight >= 600) {
        firstLoadAnimationBG == true ? (movingBG = setInterval(moveBackground, 1), firstLoadAnimationBG = false) : fakeVar = 'fake';
      }
      document.getElementById("bg").style.background = '#212121 url("../../../images/bg.jpg") repeat-x 0 0';
      var elem = document.getElementById("bg");
      var widthForBG = elem.offsetHeight * 1.669133771929825;
      document.getElementById("bg").style.backgroundSize = "cover";
      document.getElementById("PUTBACKGROUNDHERE").style.minHeight = docElemOrBodyForIndex.clientHeight;
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
  $scope.modalResumeCloseout = function() {
    window.scrollTo(0, 0);
    $scope.modalResumeOpen = false;
  }
});
