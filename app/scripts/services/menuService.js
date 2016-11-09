'use strict';
angular.module('mainSite')
  .service('menuService', function() {
    // Clears Active Classes on Click
    var idArray = ['bg', 'PUTBACKGROUNDHERE', 'PUTBACKGROUNDHERE2', 'PUTBACKGROUNDHERE3', 'PUTBACKGROUNDHERE4'];
    this.removeOtherActivesOnClick = function(id) {
      var ids = idArray;
      var len = idArray.length;
      for (var x = 0; x < len; x++) {
        if (ids[x] != id) {
          clearActive(ids[x]);
        }
      }
      ids = idArray;
    }
    // CHECKS for active class
    var gotActive = function(id2) {
      var id = id2 + 'menu';
      var element = document.getElementById(id);
      var check = (" "+element.className+" ").indexOf(' active ');
      if (check > -1) {
        return true;
      }
      else {
        return false;
      }
    }
    // Clears Active Class
    var clearActive = function(id2) {
      var id = id2 + 'menu';
      document.getElementById(id).classList.remove('active');
    }
    // Checks for Element Position and Compares to ScrollY Position of Window (Return Boolean)
    var checkOffsetTopElement = function(id, nextId, lastId, cb) {
      var position = document.getElementById(id).offsetTop;
      var nextPosition;
      if (nextId != 'none') {
        nextPosition = document.getElementById(nextId).offsetTop;
      }
      else {
        nextPosition = document.getElementById(lastId).offsetTop;
        var scrollPostition = window.pageYOffset;
        if (scrollPostition > nextPosition) {
          cb(true);
        }
      }
      var scrollPostition = window.pageYOffset;
      if (scrollPostition < nextPosition) {
        cb(true);
      }
      else {
        cb(false);
      }
    }
    // Sets the Active Class for the Menu Buttons
    var setActiveClass = function(menuBtn, next, last, res) {
      var idToUse = menuBtn + 'menu';
      var active = 'active';
      var div = document.getElementById(idToUse);
      if (res == true) {
        var checkForClassActive = gotActive(menuBtn);
        if (checkForClassActive != true) {
          div.className += 'active';
        }
        checkForClass(next, last, active);
      }
    }
    // Searches Element for Active Class
    var checkForClass = function(next, last, clss) {
      var nextId = next + 'menu';
      var lastId = last + 'menu';
      var elementOne = document.getElementById(nextId);
      var elementTwo = document.getElementById(lastId);
      if (elementOne != "nonemenu" && elementOne != null) {
        var check = (elementOne.className).indexOf(clss);
        if (check > -1) {
          clearActive(next);
        }
      }
      if (elementTwo != "nonemenu" && elementTwo != null) {
        var check = (elementTwo.className).indexOf(clss);
        if (check > -1) {
          clearActive(last);
        }
      }
    }
    // Uses Position to Find Current Elements (In View, Above and Below)
    var elementInView = function(scrollPostition, cb) {
      var id, nextId, lastId, nothing;
      var one = (document.getElementById('bg').offsetTop * .90);
      var two = (document.getElementById('PUTBACKGROUNDHERE').offsetTop * .90);
      var three = (document.getElementById('PUTBACKGROUNDHERE2').offsetTop * .90);
      var four = (document.getElementById('PUTBACKGROUNDHERE3').offsetTop * .90);
      var five = (document.getElementById('PUTBACKGROUNDHERE4').offsetTop * .90);
      scrollPostition < two ? (id = "bg", nextId = "PUTBACKGROUNDHERE", lastId = "none") : nothing = 'nada';
      scrollPostition >= two ? (id = "PUTBACKGROUNDHERE", nextId = "PUTBACKGROUNDHERE2", lastId = "bg") : nothing = 'nada';
      scrollPostition >= three ? (id = "PUTBACKGROUNDHERE2", nextId = "PUTBACKGROUNDHERE3", lastId = "PUTBACKGROUNDHERE") : nothing = 'nada';
      scrollPostition >= four ? (id = "PUTBACKGROUNDHERE3", nextId = "PUTBACKGROUNDHERE4", lastId = "PUTBACKGROUNDHERE2") : nothing = 'nada';
      scrollPostition >= five ? (id = "PUTBACKGROUNDHERE4", nextId = "none", lastId = "PUTBACKGROUNDHERE3") : nothing = 'nada';
      cb(id, nextId, lastId)
    }
    // Allows the Controller to Call the Function
    this.checkScrollPosition = function(scrollPostition, cb) {
      elementInView(scrollPostition, function (id, nextId, lastId) {
        checkOffsetTopElement(id, nextId, lastId, function(res) {
          setActiveClass(id, nextId, lastId, res);
        })
      })
    }
  })
