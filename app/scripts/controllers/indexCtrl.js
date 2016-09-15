'use strict';
angular.module("mainSite")
.controller("indexCtrl", function($scope, $interval, $timeout, scrollService, barGraphAnimationService) {
  setTimeout(function() {window.scrollTo(0, 0)}, 1000)
  var pageReferenceNumber = 0;
  function displaywheel(e){
    var evt=window.event || e //equalize event object
    var delta=evt.detail? evt.detail*(-120) : evt.wheelDelta;
    if (pageReferenceNumber == 4) {
      delta >= 120 ? pageReferenceNumber = 3 : pageReferenceNumber = 4
    }
    else if (pageReferenceNumber != 0) {
      delta >= 120 ? pageReferenceNumber -= 1 : pageReferenceNumber += 1
    }
    else {
      delta >= 120 ? pageReferenceNumber = 0 : pageReferenceNumber += 1
    }
      scrollService.scrollInputToCheck(pageReferenceNumber)
    }
  var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel"
$timeout(function() {
  if (document.attachEvent)
      {document.attachEvent("on"+mousewheelevt, displaywheel); barGraphAnimationService.runGraphAnimation();}
  else if (document.addEventListener)
      {document.addEventListener(mousewheelevt, displaywheel, false); barGraphAnimationService.runGraphAnimation();}
}, 8000)

var docElemOrBody = document.documentElement || document.body;
  // BACKGROUND ANIMATION
      var backgroundResize = function() {
          document.getElementById("bg").style.background = '#212121 url("../../../images/bg.jpg") repeat-x 0 0';
          var docElemOrBody = document.documentElement || document.body;
          var widthForBG = docElemOrBody.clientHeight * 1.669133771929825;
          document.getElementById("bg").style.backgroundSize = widthForBG + "px auto";
        }
        var windowResize = function(object, type, callback) {
          if (object == null || typeof(object) == 'undefined') return;
          if (object.addEventListener) {
              object.addEventListener(type, callback, false);
          } else if (object.attachEvent) {
              object.attachEvent("on" + type, callback);
          } else {
              object["on"+type] = callback;
          }
        };
        backgroundResize();
        windowResize(window, "resize", backgroundResize);
        var readjust = 0;
        $interval(function () {
          readjust += .1;
          document.getElementById("bg").style.backgroundPosition = readjust + "px 0px";
        }, 1);
});
