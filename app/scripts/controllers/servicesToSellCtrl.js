'use strict';
angular.module("mainSite")
.controller("servicesToSellCtrl", function($scope, $state, $interval, $timeout, servicesForSaleService, $location, scrollService, sendDataViaEmailService) {
  var mainBody = document.documentElement || document.body;

  $scope.modalNull = false;
  $scope.times = servicesForSaleService.times;
  $scope.contact = servicesForSaleService.contact;
  $scope.numOfPagesArr = servicesForSaleService.numOfPagesArr;
  $scope.timeFrame = servicesForSaleService.timeFrame;
  $scope.lookingForAWebsite = servicesForSaleService.lookingForAWebsite;
  $scope.typeOfSite = servicesForSaleService.typeOfSite;
  $scope.nextStepNew = false, $scope.hideFirstPanelOfSales = false, $scope.stepOne = false, $scope.stepTwo = false, $scope.stepThree = false, $scope.stepFour = false, $scope.stepFive = false, $scope.finishedWalkthrough = false;
  $scope.newOrOldArr = servicesForSaleService.newOrOldArr;
  $scope.newNext = function(num, data) {
      checkForInput(num, function(res) {
        if (res == true) {
          num == "0" ? ($scope.stepOne = true, $scope.lookingForAWebsite.services = data, $scope.hideFirstPanelOfSales = true) : $scope.nextStepNew = false;
          num == "1" ? ($scope.stepOne = false, $scope.stepTwo = true, $scope.lookingForAWebsite.typeOfSite = data) : $scope.nextStepNew = false;
          num == "2" ? ($scope.stepTwo = false, $scope.stepThree = true) : $scope.nextStepNew = false;
          num == "3" ? ($scope.stepThree = false, $scope.stepFour = true, $scope.lookingForAWebsite.pagesTotal = data) : $scope.nextStepNew = false;
          num == "4" ? ($scope.stepFour = false, $scope.stepFive = true, $scope.lookingForAWebsite.timeFrame = data) : $scope.nextStepNew = false;
          num == "5" ? ($scope.stepFive = false, $scope.success = true) : $scope.nextStepNew = false;
          num == "6" ? ($scope.success = false, $scope.contactForWalkthrough = true) : $scope.nextStepNew = false;
          num == "7" ? (sendDataViaEmailService.restCall(1, $scope.contact, $scope.lookingForAWebsite), $scope.finishedWalkthrough = true, $scope.contactForWalkthrough = false) : $scope.nextStepNew = false;
          num == "8" ? (sendDataViaEmailService.restCall(0, $scope.contact, $scope.lookingForAWebsite), $scope.success = false, $scope.finishedWalkthrough = true, $scope.contactDiv = false) : $scope.nextStepNew = false;
        }
        else if (num >= 7 && res == false) {
          $scope.modalNullDivTextInScope = 'Please Enter Contact Info';
          $scope.modalNull = true;
        }
        else {
          $scope.modalNullDivTextInScope = 'Please Select An Input';
          $scope.modalNull = true;
        }
      });
  }
  $scope.newBack = function(num, data) {
      num == "0" ? ($scope.stepOne = false, $scope.lookingForAWebsite.typeOfSite = data, $scope.hideFirstPanelOfSales = false) : $scope.nextStepNew = false;
      num == "1" ? ($scope.stepOne = true, $scope.stepTwo = false) : $scope.nextStepNew = false;
      num == "2" ? ($scope.stepTwo = true, $scope.stepThree = false, $scope.lookingForAWebsite.pagesTotal = data) : $scope.nextStepNew = false;
      num == "3" ? ($scope.stepThree = true, $scope.stepFour = false) : $scope.nextStepNew = false;
      num == "4" ? ($scope.stepFour = true, $scope.stepFive = false, $scope.lookingForAWebsite.timeFrame = data) : $scope.nextStepNew = false;
      num == "5" ? ($scope.stepFive = true, $scope.success = false) : $scope.nextStepNew = false;
      num == "6" ? ($scope.success = true, $scope.contactForWalkthrough = false) : $scope.nextStepNew = false;
      num == "7" ? ($scope.hideFirstPanelOfSales = false, $scope.contactDiv = false) : $scope.nextStepNew = false;
  }
  $scope.employmentYes = function() {
    $scope.hideFirstPanelOfSales = true;
    $scope.contactDiv = true;
  }
  // Options (Step 2)
  var num = 0;
  var num2 = 0;
  $scope.addOption = function () {
    num++;
    var opt = "New Option " + num;
    $scope.lookingForAWebsite.options.push(opt);
  }
  $scope.removeOption = function (index) {
    $scope.lookingForAWebsite.options.splice(index, 1);
  }
  $scope.saveOnInput = function(data, index) {
    $scope.lookingForAWebsite.options.splice(index, 1, data);
  }
  // Detail (step 6)
  $scope.addOptionDetails = function () {
    num++;
    var opt = "New Detail " + num;
    $scope.lookingForAWebsite.details.push(opt);
  }
  $scope.removeOptionDetails = function (index) {
    $scope.lookingForAWebsite.details.splice(index, 1);
  }
  $scope.saveOnInputDetails = function(data, index) {
    $scope.lookingForAWebsite.details.splice(index, 1, data);
  }
  $scope.homeBTN = function() {
    scrollService.scrollingReset();
    $state.go('home');
  }
  function checkForInput(num, output) {
    if (num == 1) {
      addClassToDocumentTag('stepTwoInput', function (element) {
        checkForChecked(element, function(res) {
          output(res);
        })
      })
    }
    else if (num == 3) {
      addClassToDocumentTag('pagesInputCheck', function (element) {
        checkForChecked(element, function(res) {
          output(res);
        })
      })
    }
    else if (num == 4) {
      addClassToDocumentTag('timeFrameInput', function (element) {
        checkForChecked(element, function(res) {
          output(res);
        })
      })
    }
    else if (num == 7 || num == 8) {
      addClassToDocumentTag('contactInput', function (element) {
        checkForValue(element, function(res) {
          output(res);
        })
      })
    }
    else if (num >= 0) {
      output(true)
    }
    else {
      output(false)
    }
  }
  function addClassToDocumentTag(input, output) {
    var element = document.getElementsByClassName(input);
    output(element)
  }
  function checkForChecked(element, output) {
      var checkBoxCheck = false;
      for (var x = 0; x < element.length; x++) {
        if (element[x].checked == true) {
          checkBoxCheck = true;
        }
      }
    output(checkBoxCheck);
  }
  function checkForValue(element, output) {
      var inputBoxValue = false;
      for (var x = 0; x < element.length; x++) {
        if (element[x].value !== null && element[x].value !== "") {
          inputBoxValue = true;
        }
      }
    output(inputBoxValue);
  }
  $scope.modalNullCloseout = function() {
    $scope.modalNull = false;
  }
  $scope.sendAjax = function(num, contact, work) {
    sendDataViaEmailService.restCall(num,contact,work);
  }
});
