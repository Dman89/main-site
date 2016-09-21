'use strict'
angular.module('mainSite')
  .service('barGraphAnimationService', function() {


this.runGraphAnimation = function() {
  var barContent = "new"
  var idArray = [
{"div":"htmlAnimate", "height": 90, "left": 7.5, "content": "<h3 class='animateGraphInnerText innerTextOfDialog'>Expert</h3><p class='animateGraphInnerText innerTextOfDialog'>HTML</p><p class='animateGraphInnerText innerTextOfDialog'>Responsive Web Design</p><p class='animateGraphInnerText innerTextOfDialog'>Webpack</p><p class='animateGraphInnerText innerTextOfDialog'>NPM</p><p class='animateGraphInnerText innerTextOfDialog'>Bootstrap</p>", "barContent": '<p class="innerBar">Expert</p>'},

{"div":"cssAnimate", "height": 85, "left": 22.5, "content": "<h3 class='animateGraphInnerText innerTextOfDialog'>Expert/Advance</h3><p class='animateGraphInnerText innerTextOfDialog'>CSS</p><p class='animateGraphInnerText innerTextOfDialog'>Communication</p><p class='animateGraphInnerText innerTextOfDialog'>JavaScript</p>", "barContent": '<p class="innerBar">Expert/Advance</p>'},

{"div":"javaScriptAnimate", "height": 80, "left": 37.5, "content": "<h3 class='animateGraphInnerText innerTextOfDialog'>Advance</h3><p class='animateGraphInnerText innerTextOfDialog'>Collaboration</p><p class='animateGraphInnerText innerTextOfDialog'>Leadship</p><p class='animateGraphInnerText innerTextOfDialog'>Angular</p><p class='animateGraphInnerText innerTextOfDialog'>RESTful API / Ajax</p><p class='animateGraphInnerText innerTextOfDialog hidden-xssm'>Google/Facebook/Twitter/Flickr</p><p class='animateGraphInnerText innerTextOfDialog'>Express.JS</p><p class='animateGraphInnerText innerTextOfDialog'>MongoDB</p><p class='animateGraphInnerText innerTextOfDialog'>Wireframing</p>", "barContent": '<p class="innerBar">Advance</p>'},

{"div":"wordpressAnimate", "height": 70, "left": 52.5, "content": "<h3 class='animateGraphInnerText innerTextOfDialog'>Advance/Intermediate</h3><p class='animateGraphInnerText innerTextOfDialog'>jQuery</p><p class='animateGraphInnerText innerTextOfDialog'>UI/UE</p><p class='animateGraphInnerText innerTextOfDialog'>Git</p><p class='animateGraphInnerText innerTextOfDialog'>Console</p><p class='animateGraphInnerText innerTextOfDialog'>Semantically Best Practice</p><p class='animateGraphInnerText innerTextOfDialog'>NodeJS</p><p class='animateGraphInnerText innerTextOfDialog'>SCSS</p>", "barContent": '<p class="innerBar">Advance/Intermediate</p>'},

{"div":"uiAnimate", "height": 60, "left": 67.5, "content": "<h3 class='animateGraphInnerText innerTextOfDialog'>Intermediate</h3><p class='animateGraphInnerText innerTextOfDialog'>Linux</p><p class='animateGraphInnerText innerTextOfDialog'>Agile</p><p class='animateGraphInnerText innerTextOfDialog'>Wordpress</p>", "barContent": '<p class="innerBar">Intermediate</p>'},

{"div":"sqlAnimate", "height": 30, "left": 82.5, "content": "<h3 class='animateGraphInnerText innerTextOfDialog'>Beginner</h3><p class='animateGraphInnerText innerTextOfDialog'>SQL</p><p class='animateGraphInnerText innerTextOfDialog'>PHP</p>", "barContent": '<p class="innerBar">Beginner</p>'}
];
  for (var x = 0; x < idArray.length; x++) {
    let open = false;
    let OrigLeft = idArray[x].left;
    let left = OrigLeft;
    let element = document.getElementById(idArray[x].div);
    let setHeight = idArray[x].height;
    let content = idArray[x].content;
    let barContent = idArray[x].barContent;
    document.getElementById(idArray[x].div).onclick = function() {
      if (open == false) {
        let y = 0;
        let h = setHeight;
        var refreshInterval = setInterval(function() {
          element.innerHTML = "";
          y += 1;
          h += 1;
          if (h <= 100) {
            element.style.height = h+"%";
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
            element.style.borderRadius = "4px";
            element.style.width = percentage+"%";
            element.style.bottom = 0;
            element.style.left = left+"%";
            element.style.zIndex = 5;
          }
          else {
            clearInterval(refreshInterval)
            setTimeout(function() {
              element.innerHTML = content;
            }, 100)
          }
        }, 10);
      }
      else {
        let y = 100;
        let leftRewind = 0;
        let h = 100;
        var refreshInterval2 = setInterval(function() {
          element.innerHTML = "";
          y -= 1;
          h -= 1;
          if (h >= setHeight) {
            element.style.height = h+"%";
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
            element.style.borderRadius = "0";
            element.style.borderTopLeftRadius = "10px";
            element.style.borderTopRightRadius = "10px";
            element.style.width = percentageRewind+"%";
            element.style.bottom = 0;
            element.style.left = leftRewind+"%";
            left = OrigLeft;
          }
          else {
            element.style.zIndex = 1;
            clearInterval(refreshInterval2)
            setTimeout(function() {
              element.innerHTML = barContent;
            }, 100)
          }
        }, 10);
      }
    }
  }
}
  })
