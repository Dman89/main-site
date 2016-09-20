'use strict';
angular.module('mainSite')
  .service('scrollService', function(barGraphAnimationService) {
    var randomSetVarForFalse = "";
    var runAnimation = true;
    var runAnimation2 = true;
    var runAnimation3 = true;
    var runAnimation4 = true;


setTimeout(function() {
  //Scroll From Section 1 to Section 2
  window.onscroll = function() {
    let yRangeToCheck = document.getElementById("bg").offsetHeight * .70;
    let tempNum = document.getElementById('PUTBACKGROUNDHERE').offsetTop;
    if (runAnimation == true) {
      if ( window.scrollY >= yRangeToCheck ) {
        window.scrollTo(0, tempNum);
        document.body.style.overflowY = "hidden";
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
        //Second Slide
        setTimeout(function() {
          document.body.style.overflowY = "scroll";
        // Old Scroll Patter Went Here (Label: A1Scroll)
        }, 2500)
      }
    }
  }
}, 2000)

      setTimeout(function() {
        document.body.style.overflowY = "scroll";
      }, 8000)
  })
