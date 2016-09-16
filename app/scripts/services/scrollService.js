'use strict';
angular.module('mainSite')
  .service('scrollService', function() {
    var randomSetVarForFalse = "";
    var runAnimation = true;
    this.scrollInputToCheck = function(pageReferenceNumber) {
      pageReferenceNumber == 0 ? document.getElementById("bg").scrollIntoView({block: "end", behavior: "smooth"}) : randomSetVarForFalse = "";
        pageReferenceNumber == 1 ? document.getElementById("PUTBACKGROUNDHERE").scrollIntoView({block: "end", behavior: "smooth"}) : randomSetVarForFalse = "";
        pageReferenceNumber == 2 ? document.getElementById("PUTBACKGROUNDHERE2").scrollIntoView({block: "end", behavior: "smooth"}) : randomSetVarForFalse = "";
        pageReferenceNumber == 3 ? document.getElementById("PUTBACKGROUNDHERE3").scrollIntoView({block: "end", behavior: "smooth"}) : randomSetVarForFalse = "";
        pageReferenceNumber == 4 ? document.getElementById("PUTBACKGROUNDHERE4").scrollIntoView({block: "end", behavior: "smooth"}) : randomSetVarForFalse = "";
        if (pageReferenceNumber == 1) {
          if (runAnimation == true) {
            runAnimation = false
            let elem = document.getElementsByClassName('barGraph');
            for (var x = 0; x < elem.length; x++){
              elem[x].classList.add("animateGraph");
            }
            let elemInner = document.getElementsByClassName('innerBar');
            for (var x = 0; x < elemInner.length; x++){
              elemInner[x].classList.add("animateGraph");
            }
          }
        }
    }
  })
