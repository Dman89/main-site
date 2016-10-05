'use strict';
angular.module("mainSite")
.controller("menuCtrl", function($scope, $interval, $timeout, menuService, menuCollapseService) {


  var docElemOrBody = document.documentElement || document.body;
  var scrollPostition = window.pageYOffset;
  var justLoaded = 1;
  $scope.home = function() {
    window.scrollTo(0,0);
    menuService.removeOtherActivesOnClick("bg");
    menuCollapseService.collapseMenu();
  }
  var scrollToFun = function(elem) {
    let yCord = elem.offsetTop;
    window.scrollTo(0, yCord);
  }
  $scope.skills = function() {
    if (justLoaded == 1) {
      scrollToFun(document.getElementById("PUTBACKGROUNDHERE"));
      justLoaded = 0;
    }
    else {
      scrollToFun(document.getElementById("PUTBACKGROUNDHERE"));
      menuService.removeOtherActivesOnClick("PUTBACKGROUNDHERE");
      menuCollapseService.collapseMenu();
    }
  }
  $scope.bio = function() {
    if (justLoaded == 1) {
      scrollToFun(document.getElementById("PUTBACKGROUNDHERE"));
      justLoaded = 0;
    }
    else {
      scrollToFun(document.getElementById("PUTBACKGROUNDHERE2"));
      menuService.removeOtherActivesOnClick("PUTBACKGROUNDHERE2");
      menuCollapseService.collapseMenu();
    }
  }
  $scope.port = function() {
    if (justLoaded == 1) {
      scrollToFun(document.getElementById("PUTBACKGROUNDHERE"));
      justLoaded = 0;
    }
    else {
      scrollToFun(document.getElementById("PUTBACKGROUNDHERE3"));
      menuService.removeOtherActivesOnClick("PUTBACKGROUNDHERE3");
      menuCollapseService.collapseMenu();
    }
  }
  $scope.contact = function() {
    if (justLoaded == 1) {
      scrollToFun(document.getElementById("PUTBACKGROUNDHERE"));
      justLoaded = 0;
    }
    else {
      scrollToFun(document.getElementById("PUTBACKGROUNDHERE4"));
      menuService.removeOtherActivesOnClick("PUTBACKGROUNDHERE4");
      menuCollapseService.collapseMenu();
    }
  }

  $timeout(function() {
    document.getElementById("navbar").style.pointerEvents = "auto";
  }, 8000)
});
