'use strict';
angular.module('mainSite')
  .service('scrollService', function(barGraphAnimationService, $location, menuService) {
    var docElemOrBody = document.documentElement || document.body;
    var randomSetVarForFalse = "";
    var runAnimation = true;

      //Scroll From Section 1 to Section 2
    this.scrolling = function(cb) {
      var currentScrollPosition = window.pageYOffset;
      menuService.checkScrollPosition(currentScrollPosition, function(id, res) {});
      if ($location.path() == '/') {
        var yRangeToCheck = document.getElementById("bg").offsetHeight * .70;
        var yRangeToCheckPastDiv = document.getElementById("PUTBACKGROUNDHERE2").offsetTop  * .70;
        var tempNum = document.getElementById('PUTBACKGROUNDHERE').offsetTop;
          if ( window.scrollY >= yRangeToCheck && runAnimation === true ) {
            if (window.scrollY < yRangeToCheckPastDiv) {
              runAnimation = false
              var elem = document.getElementsByClassName('barGraph');
              for (var x = 0; x < elem.length; x++){
                elem[x].style.opacity = 1;
                elem[x].classList.add("animateGraph");
              }
              var elemInner = document.getElementsByClassName('innerBar');
              for (var x = 0; x < elemInner.length; x++){
                elemInner[x].classList.add("animateGraph");
              }
              barGraphAnimationService.runGraphAnimation();
            }
          }
        }
    }
    this.scrollingReset = function() {
       runAnimation = true;
    }


  })
