'use strict'
angular.module('mainSite')
  .service('barGraphAnimationService', function() {


this.runGraphAnimation = function() {
  var barContent = "new"
  var idArray = [
    {"div":"htmlAnimate", "height": 90, "left": 7.5, "content": "<h3 class='animateGraphInnerText innerTextOfDialog'>Expert</h3><p class='animateGraphInnerText innerTextOfDialog'>HTML</p><p class='animateGraphInnerText innerTextOfDialog'>Responsive Web Design</p><p class='animateGraphInnerText innerTextOfDialog'>Webpack</p><p class='animateGraphInnerText innerTextOfDialog'>NPM</p><p class='animateGraphInnerText innerTextOfDialog'>Bootstrap</p>", "barContent": '<p class="innerBar">Expert</p>'},

    {"div":"cssAnimate", "height": 85, "left": 22.5, "content": "<h3 class='animateGraphInnerText innerTextOfDialog'>Expert/Advanced</h3><p class='animateGraphInnerText innerTextOfDialog'>Collaboration</p><p class='animateGraphInnerText innerTextOfDialog'>Leadship</p><p class='animateGraphInnerText innerTextOfDialog'>CSS</p><p class='animateGraphInnerText innerTextOfDialog'>Communication</p><p class='animateGraphInnerText innerTextOfDialog'>JavaScript</p>", "barContent": '<p class="innerBar">Expert/Advanced</p>'},

    {"div":"javaScriptAnimate", "height": 80, "left": 37.5, "content": "<h3 class='animateGraphInnerText innerTextOfDialog'>Advanced</h3><p class='animateGraphInnerText innerTextOfDialog'>Angular</p><p class='animateGraphInnerText innerTextOfDialog'>RESTful API / Ajax</p><p class='animateGraphInnerText innerTextOfDialog hidden-xssm'>(Google/Facebook/Twitter/Flickr)</p><p class='animateGraphInnerText innerTextOfDialog'>Express.JS</p><p class='animateGraphInnerText innerTextOfDialog'>MongoDB</p><p class='animateGraphInnerText innerTextOfDialog'>Wireframing</p>", "barContent": '<p class="innerBar">Advanced</p>'},

    {"div":"wordpressAnimate", "height": 70, "left": 52.5, "content": "<h3 class='animateGraphInnerText innerTextOfDialog'>Advanced/Intermediate</h3><p class='animateGraphInnerText innerTextOfDialog'>jQuery</p><p class='animateGraphInnerText innerTextOfDialog'>UI/UE</p><p class='animateGraphInnerText innerTextOfDialog'>Git</p><p class='animateGraphInnerText innerTextOfDialog'>Console</p><p class='animateGraphInnerText innerTextOfDialog'>Semantically Best Practice</p><p class='animateGraphInnerText innerTextOfDialog'>NodeJS</p><p class='animateGraphInnerText innerTextOfDialog'>SCSS</p>", "barContent": '<p class="innerBar">Advanced/Intermediate</p>'},

    {"div":"uiAnimate", "height": 60, "left": 67.5, "content": "<h3 class='animateGraphInnerText innerTextOfDialog'>Intermediate</h3><p class='animateGraphInnerText innerTextOfDialog'>Linux</p><p class='animateGraphInnerText innerTextOfDialog'>Agile</p><p class='animateGraphInnerText innerTextOfDialog'>Wordpress</p>", "barContent": '<p class="innerBar">Intermediate</p>'},

    {"div":"sqlAnimate", "height": 30, "left": 82.5, "content": "<h3 class='animateGraphInnerText innerTextOfDialog'>Beginner</h3><p class='animateGraphInnerText innerTextOfDialog'>SQL</p><p class='animateGraphInnerText innerTextOfDialog'>PHP</p>", "barContent": '<p class="innerBar">Beginner</p>'}
  ];
  idArray.map(function(divToAnimate) {
    var open = false;
    var OrigLeft = divToAnimate.left;
    var left = OrigLeft;
    var elementInForLoop = document.getElementById(divToAnimate.div);
    var setHeight = divToAnimate.height;
    var contentInForLoop = divToAnimate.content;
    var barContent = divToAnimate.barContent;
    document.getElementById(divToAnimate.div).onclick = function() {
      console.log(divToAnimate.div);
      if (open == false) {
        var y = 0;
        var h = setHeight;
        var refreshInterval = setInterval(function() {
          elementInForLoop.innerHTML = "";
          y += 1;
          h += 1;
          if (h <= 100) {
            elementInForLoop.style.height = h+"%";
          }
          if (left >= 1) {
            left -= 1;
          }
          else {
            left = 0;
          }
          if (y <= 95) {
            var percentage = 5 + y;
            open = true;
            elementInForLoop.style.borderRadius = "4px";
            elementInForLoop.style.width = percentage+"%";
            elementInForLoop.style.bottom = 0;
            elementInForLoop.style.left = left+"%";
            elementInForLoop.style.zIndex = 5;
          }
          else {
            clearInterval(refreshInterval)
            setTimeout(function() {
              elementInForLoop.innerHTML = contentInForLoop;
            }, 100)
          }
        }, 1);
      }
      else {
        var y = 100;
        var leftRewind = 0;
        var h = 100;
        var refreshInterval2 = setInterval(function() {
          elementInForLoop.innerHTML = "";
          y -= 1;
          h -= 1;
          if (h >= setHeight) {
            elementInForLoop.style.height = h+"%";
          }
          if (leftRewind == 0) {
            leftRewind += .5;
          }
          if (leftRewind <= OrigLeft) {
            leftRewind += 1;
          }
          if ( y == 8) {
            y = 7.5;
          }
          if (y >= 7.5) {
            var percentageRewind = y;
            open = false;
            elementInForLoop.style.borderRadius = "0";
            elementInForLoop.style.borderTopLeftRadius = "10px";
            elementInForLoop.style.borderTopRightRadius = "10px";
            elementInForLoop.style.width = percentageRewind+"%";
            elementInForLoop.style.bottom = 0;
            elementInForLoop.style.left = leftRewind+"%";
            left = OrigLeft;
          }
          else {
            elementInForLoop.style.zIndex = 1;
            clearInterval(refreshInterval2)
            setTimeout(function() {
              elementInForLoop.innerHTML = barContent;
            }, 100)
          }
        }, 1);
      }
    }
  })
}
  })
