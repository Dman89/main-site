'use strict';
angular.module("mainSite")
.controller("menuCtrl", function($scope, $interval, $timeout, menuService, menuCollapseService) {
  var docElemOrBody = document.documentElement || document.body;
  var scrollPostition = window.pageYOffset;
  var scrollToFun = function(elem) {
    let yCord = elem.offsetTop;
    window.scrollTo(0, yCord);
  }
  $scope.home = function() {
    window.scrollTo(0,0);
    menuService.removeOtherActivesOnClick("bg");
    menuCollapseService.collapseMenu();
  }
  $scope.skills = function() {
      scrollToFun(document.getElementById("PUTBACKGROUNDHERE"));
      menuService.removeOtherActivesOnClick("PUTBACKGROUNDHERE");
    menuCollapseService.collapseMenu();
  }
  $scope.bio = function() {
      scrollToFun(document.getElementById("PUTBACKGROUNDHERE2"));
      menuService.removeOtherActivesOnClick("PUTBACKGROUNDHERE2");
    menuCollapseService.collapseMenu();
  }
  $scope.port = function() {
      scrollToFun(document.getElementById("PUTBACKGROUNDHERE3"));
      menuService.removeOtherActivesOnClick("PUTBACKGROUNDHERE3");
    menuCollapseService.collapseMenu();
  }
  $scope.contact = function() {
      scrollToFun(document.getElementById("PUTBACKGROUNDHERE4"));
      menuService.removeOtherActivesOnClick("PUTBACKGROUNDHERE4");
    menuCollapseService.collapseMenu();
  }
});
