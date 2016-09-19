'use strict';
angular.module('mainSite')
  .service('scrollService', function() {
    var randomSetVarForFalse = "";
    var runAnimation = true;
    var runAnimation2 = true;
    var runAnimation3 = true;
    var runAnimation4 = true;


// setTimeout(function() {
//   window.onscroll = function() {
//     let tempNum = document.getElementById('PUTBACKGROUNDHERE').offsetTop;
//     if (runAnimation == true) {
//       if (window.scrollY >= 10) {
//         document.body.style.overflowY = "hidden";
//         window.scrollTo(0, tempNum);
//       }
//       if ( window.scrollY >= document.getElementById('PUTBACKGROUNDHERE').offsetTop ) {
//         runAnimation = false
//         let elem = document.getElementsByClassName('barGraph');
//         for (var x = 0; x < elem.length; x++){
//           elem[x].classList.add("animateGraph");
//         }
//         let elemInner = document.getElementsByClassName('innerBar');
//         for (var x = 0; x < elemInner.length; x++){
//           elemInner[x].classList.add("animateGraph");
//         }
//         //Second Slide
//         setTimeout(function() {
//           document.body.style.overflowY = "scroll";
//
//               // INCASE I WANT MORE COW BELL
//           // window.onscroll = function() {
//           //   let checkNum = document.getElementById('PUTBACKGROUNDHERE2').offsetTop;
//           //   let tempNum2 = document.getElementById('PUTBACKGROUNDHERE').offsetTop;
//           //   if (runAnimation == false && runAnimation2 == true) {
//           //     runAnimation2 = false;
//           //     window.scrollTo(0, checkNum);
//           //     document.body.style.overflowY = "hidden";
//           //     setTimeout(function() {
//           //       document.body.style.overflowY = "scroll"
//           //     }, 1000)
//           //   }
//           // }
//           // //Third Slide
//           // setTimeout(function() {
//           // document.body.style.overflowY = "scroll";
//           //   window.onscroll = function() {
//           //     let checkNum2 = document.getElementById('PUTBACKGROUNDHERE3').offsetTop;
//           //     let tempNum3 = document.getElementById('PUTBACKGROUNDHERE2').offsetTop;
//           //     if (runAnimation == false && runAnimation2 == false && runAnimation3 == true) {
//           //       runAnimation3 = false;
//           //       window.scrollTo(0, checkNum2);
//           //       document.body.style.overflowY = "hidden";
//           //       setTimeout(function() {
//           //         document.body.style.overflowY = "scroll"
//           //       }, 1000)
//           //     }
//           //   }
//           //
//           //   //Fourth Slide
//           //   setTimeout(function() {
//           //   document.body.style.overflowY = "scroll";
//           //     window.onscroll = function() {
//           //       let checkNum3 = document.getElementById('PUTBACKGROUNDHERE4').offsetTop;
//           //       let tempNum4 = document.getElementById('PUTBACKGROUNDHERE2').offsetTop;
//           //       if (runAnimation3 == false && runAnimation4 == true) {
//           //         runAnimation4 = false;
//           //         window.scrollTo(0, checkNum3);
//           //         document.body.style.overflowY = "hidden";
//           //         setTimeout(function() {
//           //           document.body.style.overflowY = "scroll"
//           //         }, 1000)
//           //       }
//           //     }
//           //   }, 1000)
//           // }, 1000)
//         }, 2500)
//       }
//     }
//   }
// }, 2000)

      setTimeout(function() {
        document.body.style.overflowY = "scroll";
      }, 10)
  })
