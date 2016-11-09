'use strict';
angular.module('mainSite')
  .service('menuCollapseService', function() {
    this.collapseMenu = function() {
      var elem = document.getElementById('myNavbar');
      var element = elem.className;
      var check = (element.indexOf('in') > -1)
      if (check == true) {
        elem.classList.remove('in');
      }
    }
  })
