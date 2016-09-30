'use strict';
angular.module("mainSite")
.controller("menuCtrl", function($scope, $interval, $timeout, menuService, menuCollapseService) {


  var docElemOrBody = document.documentElement || document.body;
  var scrollPostition = window.pageYOffset;
  $scope.home = function() {
    window.scrollTo(0,0);
    menuService.removeOtherActivesOnClick("bg");
    menuCollapseService.collapseMenu();
  }
  $scope.skills = function() {
    document.getElementById("PUTBACKGROUNDHERE").scrollIntoView({block: "end", behavior: "smooth"});
    menuService.removeOtherActivesOnClick("PUTBACKGROUNDHERE");
    menuCollapseService.collapseMenu();
  }
  $scope.bio = function() {
    document.getElementById("PUTBACKGROUNDHERE2").scrollIntoView({block: "end", behavior: "smooth"});
    menuService.removeOtherActivesOnClick("PUTBACKGROUNDHERE2");
    menuCollapseService.collapseMenu();
  }
  $scope.port = function() {
    document.getElementById("PUTBACKGROUNDHERE3").scrollIntoView({block: "end", behavior: "smooth"});
    menuService.removeOtherActivesOnClick("PUTBACKGROUNDHERE3");
    menuCollapseService.collapseMenu();
  }
  $scope.contact = function() {
    document.getElementById("PUTBACKGROUNDHERE4").scrollIntoView({block: "end", behavior: "smooth"});
    menuService.removeOtherActivesOnClick("PUTBACKGROUNDHERE4");
    menuCollapseService.collapseMenu();
  }

  $timeout(function() {
    document.getElementById("navbar").style.pointerEvents = "auto";
  }, 8000)
});
