'use strict';
angular.module("mainSite")
.controller("menuCtrl", function($scope, $interval, $timeout) {var docElemOrBody = document.documentElement || document.body;
var scrollPostition = window.pageYOffset;
  $scope.home = function() {
    document.getElementById("bg").scrollIntoView({block: "end", behavior: "smooth"});
  }
  $scope.skills = function() {
    document.getElementById("PUTBACKGROUNDHERE").scrollIntoView({block: "end", behavior: "smooth"});
  }
  $scope.values = function() {
    document.getElementById("PUTBACKGROUNDHERE2").scrollIntoView({block: "end", behavior: "smooth"});
  }
  $scope.values = function() {
    document.getElementById("PUTBACKGROUNDHERE3").scrollIntoView({block: "end", behavior: "smooth"});
  }
  $scope.values = function() {
    document.getElementById("PUTBACKGROUNDHERE4").scrollIntoView({block: "end", behavior: "smooth"});
  }



  $timeout(function() {
    document.getElementById("myNav123").style.pointerEvents = "auto";
  }, 8000)
      // window.onscroll = function() {
      //   console.log(scrollPostition, document.getElementById("PUTBACKGROUNDHERE").offsetTop, document.getElementById("bg").offsetTop);
      //   if (scrollPostition == 0) {
      //       document.getElementById("PUTBACKGROUNDHERE").scrollIntoView({block: "end", behavior: "smooth"});
      //   }
      //   else if (scrollPostition == document.getElementById("PUTBACKGROUNDHERE").offsetTop) {
      //       document.getElementById("bg").scrollIntoView({block: "start", behavior: "smooth"});
      //   }
      // }

});
