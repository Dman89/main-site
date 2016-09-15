'use strict'
angular.module('mainSite')
  .service('barGraphAnimationService', function() {


this.runGraphAnimation = function() {
  var barContent = "new"
  var idArray = [
{"div":"htmlAnimate", "height": 90, "left": 7.5, "content": "<h3 class='animateGraphInnerText'>Expert</h3><p class='animateGraphInnerText'>HTML</p><p class='animateGraphInnerText'>Responsive Web Design</p><p class='animateGraphInnerText'>Webpack</p><p class='animateGraphInnerText'>NPM</p><p class='animateGraphInnerText'>Bootstrap</p>", "barContent": '<p class="innerBar">Expert</p>'},

{"div":"cssAnimate", "height": 85, "left": 22.5, "content": "<h3 class='animateGraphInnerText'>Expert/Advance</h3><p class='animateGraphInnerText'>CSS</p><p class='animateGraphInnerText'>Communication</p><p class='animateGraphInnerText'>JavaScript</p>", "barContent": '<p class="innerBar">Expert/Advance</p>'},

{"div":"javaScriptAnimate", "height": 80, "left": 37.5, "content": "<h3 class='animateGraphInnerText'>Advance</h3><p class='animateGraphInnerText'>Collaboration</p><p class='animateGraphInnerText'>Leadship</p><p class='animateGraphInnerText'>Angular</p><p class='animateGraphInnerText'>RESTful API / Ajax</p><p class='animateGraphInnerText hidden-xssm'>Google/Facebook/Twitter/Flickr</p><p class='animateGraphInnerText'>Express.JS</p><p class='animateGraphInnerText'>MongoDB</p><p class='animateGraphInnerText'>Wireframing</p>", "barContent": '<p class="innerBar">Advance</p>'},

{"div":"wordpressAnimate", "height": 70, "left": 52.5, "content": "<h3 class='animateGraphInnerText'>Advance/Intermediate</h3><p class='animateGraphInnerText'>jQuery</p><p class='animateGraphInnerText'>UI/UE</p><p class='animateGraphInnerText'>Git</p><p class='animateGraphInnerText'>Console</p><p class='animateGraphInnerText'>Semantically Best Practice</p><p class='animateGraphInnerText'>NodeJS</p>", "barContent": '<p class="innerBar">Advance/Intermediate</p>'},

{"div":"uiAnimate", "height": 60, "left": 67.5, "content": "<h3 class='animateGraphInnerText'>Intermediate</h3><p class='animateGraphInnerText'>Agile</p><p class='animateGraphInnerText'>Wordpress</p>", "barContent": '<p class="innerBar">Intermediate</p>'},

{"div":"sqlAnimate", "height": 30, "left": 82.5, "content": "<h3 class='animateGraphInnerText'>Beginner</h3><p class='animateGraphInnerText'>SQL</p><p class='animateGraphInnerText'>PHP</p>", "barContent": '<p class="innerBar">Beginner</p>'}
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
            element.style.zIndex = 1;
            left = OrigLeft;
          }
          else {
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
