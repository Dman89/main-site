'use strict';
angular.module("mainSite")
.controller("servicesToSellCtrl", function($scope, $interval, $timeout, servicesForSaleService) {
  $scope.nextStepNew = false, $scope.nextStepOld = false, $scope.nextStepUpdate = false, $scope.hideFirstPanelOfSales = false;
  $scope.newOrOldArr = servicesForSaleService.newOrOldArr;
  $scope.serviceToSellPageOne = function(num) {
      num == "0" ? ($scope.nextStepNew = true, $scope.hideFirstPanelOfSales = true) : $scope.nextStepNew = false;
      num == "2" ? ($scope.nextStepOld = true, $scope.hideFirstPanelOfSales = true) : $scope.nextStepOld = false;
      num == "1" ? ($scope.nextStepUpdate = true, $scope.hideFirstPanelOfSales = true) : $scope.nextStepUpdate = false;
  }
});
