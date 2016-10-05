'use strict';
angular.module('mainSite')
  .service('unlockService', function() {
    this.runEventListener = function(funcPassed) {
      let lockElem = document.getElementById('lock');
      let lockElem2 = document.getElementById('lock2');
      let lockButton = document.getElementById('lockButton');
      let lockButton2 = document.getElementById('lockButton2');
      lockButton.addEventListener('mouseover', function() {
        unlockButton(lockElem);
      });
      lockButton2.addEventListener('mouseover', function() {
        unlockButton(lockElem2);
      });
      lockButton.addEventListener('mouseout', function() {
        unlockButton(lockElem);
      });
      lockButton2.addEventListener('mouseout', function() {
        unlockButton(lockElem2);
      });

    }
    var unlockButton = function(elem) {
      checkLock(elem);
    }
    var checkLock = function(elem) {
      let element = elem.className;
      let checkLock = (element.indexOf('fa-phone') > -1);
      let checkUnlock = (element.indexOf('fa-volume-control-phone') > -1);
      if (checkLock) {
        elem.classList.remove('fa-phone');
        elem.classList.add('fa-volume-control-phone');
      }
      else if (checkUnlock) {
        elem.classList.add('fa-phone');
        elem.classList.remove('fa-volume-control-phone');
      }
    }

  })
