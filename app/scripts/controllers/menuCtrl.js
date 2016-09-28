'use strict';
angular.module("mainSite")
.controller("menuCtrl", function($scope, $interval, $timeout, menuService) {

  $timeout(function () {
    window.addEventListener('scroll', function() {
      let currentScrollPosition = window.pageYOffset;
      menuService.checkScrollPosition(currentScrollPosition, function(id, res) {

      });
    });

  }, 2000)
  var docElemOrBody = document.documentElement || document.body;
  var scrollPostition = window.pageYOffset;
  $scope.home = function() {
    document.getElementById("bg").scrollIntoView({block: "end", behavior: "smooth"});
    menuService.removeOtherActivesOnClick("bg");
  }
  $scope.skills = function() {
    document.getElementById("PUTBACKGROUNDHERE").scrollIntoView({block: "end", behavior: "smooth"});
    menuService.removeOtherActivesOnClick("PUTBACKGROUNDHERE");
  }
  $scope.bio = function() {
    document.getElementById("PUTBACKGROUNDHERE2").scrollIntoView({block: "end", behavior: "smooth"});
    menuService.removeOtherActivesOnClick("PUTBACKGROUNDHERE2");
  }
  $scope.port = function() {
    document.getElementById("PUTBACKGROUNDHERE3").scrollIntoView({block: "end", behavior: "smooth"});
    menuService.removeOtherActivesOnClick("PUTBACKGROUNDHERE3");
  }
  $scope.contact = function() {
    document.getElementById("PUTBACKGROUNDHERE4").scrollIntoView({block: "end", behavior: "smooth"});
    menuService.removeOtherActivesOnClick("PUTBACKGROUNDHERE4");
  }

  $timeout(function() {
    document.getElementById("myNav123").style.pointerEvents = "auto";
  }, 8000)
});
