'use strict';
angular.module("mainSite")
.controller("servicesToSellCtrl", function($scope, $state, $interval, $timeout, servicesForSaleService) {
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
    'details': ''
  };
  $scope.typeOfSite = {'personal': false, 'blog': false, 'social': false, 'eCommerce': false, 'business': false, 'nonProfit': false, 'other': {'isTrue': false, 'content': ''}};
  $scope.nextStepNew = false, $scope.hideFirstPanelOfSales = false, $scope.stepOne = false, $scope.stepTwo = false, $scope.stepThree = false, $scope.stepFour = false, $scope.stepFive = false;
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
      num == "5" ? ($scope.stepFive = false, $scope.success = true, $scope.lookingForAWebsite.details = data) : $scope.nextStepNew = false;
  }
  $scope.addOption = function () {
    $scope.lookingForAWebsite.options.push("");
  }
  $scope.removeOption = function (index) {
    $scope.lookingForAWebsite.options.splice(index, 1);
  }
  $scope.saveOnInput = function(data, index) {
    $scope.lookingForAWebsite.options.splice(index, 1, data);
  }
});
