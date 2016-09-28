'use strict';
angular.module('mainSite')
  .service('menuCollapseService', function() {
    this.collapseMenu = function() {
      let elem = document.getElementById('myNavbar');
      let element = elem.className;
      let check = (element.indexOf('in') > -1)
      if (check == true) {
        elem.classList.remove('in');
      }
    }
  })
