'use strict';
angular.module("mainSite")
.controller("servicesToSellCtrl", function($scope, $state, $interval, $timeout, servicesForSaleService, $location, scrollService) {
  let mainBody = document.documentElement || document.body;
  mainBody.style.overflowY = "scroll";
  $scope.times = {
    'times': [9,10,11,12,1,2,3,4,5,6,7,8],
    'amPm': ['PM', 'AM'],
    'timezone': ['EST', 'MST', 'PST']
  }
  $scope.contact = {
    'name': '',
    'email': '',
    'phone': '',
    'company': '',
    'time': {
      'number': $scope.times.times[0],
      'amPm': $scope.times.amPm[1],
      'timezone': $scope.times.timezone[2]
    }
  }
  $scope.numOfPagesArr = {
    "one": false,
    "six": false,
    "sixteen": false,
    "dynamic": false
  };
  $scope.timeFrame = {
    "flexible": false,
    "asap": false,
    "nextFewDays": false,
    "byDate": {
      "isTrue": false,
      "date": ""
    },
    "other": {
      "isTrue": false,
      "other": ""
    },
    "employement": {
      "isTrue": false,
      "employement": ""
    }
  }
  $scope.lookingForAWebsite = {
    "services": '',
    "typeOfSite": {
      'personal': false,
      'blog': false,
      'social': false,
      'eCommerce': false,
      'business': false,
      'nonProfit': false,
      'other': {
          'isTrue': false,
          'content': ''
      }
    },
    "options": [""],
    'pagesTotal': {},
    'timeFrame': {
      'flexible': false,
      'asap': false,
      'nextFewDays': false,
      'byDate': {
        'isTrue': false,
        'date': ""
      },
      'other': {
        'isTrue': false,
        'other': ""
      },
      'employement': {
        'isTrue': false,
        'employement': ""
      }
    },
    'details': ['']
  };
  $scope.typeOfSite = {'personal': false, 'blog': false, 'social': false, 'eCommerce': false, 'business': false, 'nonProfit': false, 'other': {'isTrue': false, 'content': ''}};
  $scope.nextStepNew = false, $scope.hideFirstPanelOfSales = false, $scope.stepOne = false, $scope.stepTwo = false, $scope.stepThree = false, $scope.stepFour = false, $scope.stepFive = false, $scope.finishedWalkthrough = false;
  $scope.newOrOldArr = servicesForSaleService.newOrOldArr;
  $scope.serviceToSellPageOne = function(num) {
      num == "0" ? ($scope.nextStepNew = true, $scope.hideFirstPanelOfSales = true) : $scope.nextStepNew = false;
      num == "2" ? ($scope.nextStepNew = true, $scope.hideFirstPanelOfSales = true) : $scope.nextStepOld = false;
      num == "1" ? ($scope.nextStepNew = true, $scope.hideFirstPanelOfSales = true) : $scope.nextStepUpdate = false;
  }
  $scope.newNext = function(num, data) {
      num == "0" ? ($scope.stepOne = true, $scope.lookingForAWebsite.services = data, $scope.hideFirstPanelOfSales = true) : $scope.nextStepNew = false;
      num == "1" ? ($scope.stepOne = false, $scope.stepTwo = true, $scope.lookingForAWebsite.typeOfSite = data) : $scope.nextStepNew = false;
      num == "2" ? ($scope.stepTwo = false, $scope.stepThree = true) : $scope.nextStepNew = false;
      num == "3" ? ($scope.stepThree = false, $scope.stepFour = true, $scope.lookingForAWebsite.pagesTotal = data) : $scope.nextStepNew = false;
      num == "4" ? ($scope.stepFour = false, $scope.stepFive = true, $scope.lookingForAWebsite.timeFrame = data) : $scope.nextStepNew = false;
      num == "5" ? ($scope.stepFive = false, $scope.success = true) : $scope.nextStepNew = false;
      num == "6" ? ($scope.success = false, $scope.finishedWalkthrough = true) : $scope.nextStepNew = false;
      num == "7" ? ($scope.success = false, $scope.finishedWalkthrough = true, $scope.contactDiv = false) : $scope.nextStepNew = false;
  }
  $scope.newBack = function(num, data) {
      num == "0" ? ($scope.stepOne = false, $scope.lookingForAWebsite.typeOfSite = data, $scope.hideFirstPanelOfSales = false) : $scope.nextStepNew = false;
      num == "1" ? ($scope.stepOne = true, $scope.stepTwo = false) : $scope.nextStepNew = false;
      num == "2" ? ($scope.stepTwo = true, $scope.stepThree = false, $scope.lookingForAWebsite.pagesTotal = data) : $scope.nextStepNew = false;
      num == "3" ? ($scope.stepThree = true, $scope.stepFour = false) : $scope.nextStepNew = false;
      num == "4" ? ($scope.stepFour = true, $scope.stepFive = false, $scope.lookingForAWebsite.timeFrame = data) : $scope.nextStepNew = false;
      num == "5" ? ($scope.stepFive = true, $scope.success = false) : $scope.nextStepNew = false;
      num == "6" ? ($scope.hideFirstPanelOfSales = false, $scope.contactDiv = false) : $scope.nextStepNew = false;
  }
  $scope.employementYes = function() {
    $scope.hideFirstPanelOfSales = true;
    $scope.contactDiv = true;
  }
  // Options (Step 2)
  var num = 0;
  var num2 = 0;
  $scope.addOption = function () {
    num++;
    let opt = "New Option " + num;
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
    let opt = "New Detail " + num;
    $scope.lookingForAWebsite.details.push(opt);
  }
  $scope.removeOptionDetails = function (index) {
    $scope.lookingForAWebsite.details.splice(index, 1);
  }
  $scope.saveOnInputDetails = function(data, index) {
    $scope.lookingForAWebsite.details.splice(index, 1, data);
  }
  $scope.homeBTN = function() {
    mainBody.style.overflow = "hidden";
    mainBody.style.overflowY = "hidden";
    scrollService.scrollingReset();
    $state.go('home');
  }
});
