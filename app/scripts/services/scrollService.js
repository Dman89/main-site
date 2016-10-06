'use strict';
angular.module('mainSite')
  .service('scrollService', function(barGraphAnimationService, $location, menuService) {
    let docElemOrBody = document.documentElement || document.body;
    var randomSetVarForFalse = "";
    var runAnimation = true;

      //Scroll From Section 1 to Section 2
    this.scrolling = function(cb) {
      let currentScrollPosition = window.pageYOffset;
      menuService.checkScrollPosition(currentScrollPosition, function(id, res) {});
      if ($location.path() == '/') {
        let yRangeToCheck = document.getElementById("bg").offsetHeight * .70;
        let tempNum = document.getElementById('PUTBACKGROUNDHERE').offsetTop;
          if ( window.scrollY >= yRangeToCheck && runAnimation === true ) {
            docElemOrBody.style.overflowY = "scroll";
            window.scrollTo(0, tempNum);
            runAnimation = false
            let elem = document.getElementsByClassName('barGraph');
            for (var x = 0; x < elem.length; x++){
              elem[x].style.opacity = 1;
              elem[x].classList.add("animateGraph");
            }
            let elemInner = document.getElementsByClassName('innerBar');
            for (var x = 0; x < elemInner.length; x++){
              elemInner[x].classList.add("animateGraph");
            }
            barGraphAnimationService.runGraphAnimation();
          }
        }
    }
    this.scrollingReset = function() {
       runAnimation = true;
    }


  })
