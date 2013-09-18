'use strict';

angular.module('caymanControllers')
.factory('MainCtrl',
  function($scope, localStorageService) {
    $scope.accounts = localStorageService.getAccounts();
    $scope.budgets = localStorageService.getBudgets();
    $scope.newAccountName = '';
    $scope.newBudgetName = '';

    $scope.addAccount = function(newAccountName) {
      localStorageService.addAccount({name:newAccountName});
      $scope.accounts = localStorageService.getAccounts();
      $scope.newAccountName = '';
    };

    $scope.addBudget = function(newBudgetName) {
      localStorageService.addBudget({name:newBudgetName});
      $scope.budgets = localStorageService.getBudgets();
      $scope.newBudgetName = '';
    };

    $scope.removeAccount = function(i) {
      localStorageService.removeAccount($scope.accounts[i]);
      $scope.accounts = localStorageService.getAccounts();
    };

    $scope.removeBudget = function(i) {
      localStorageService.removeBudget($scope.budgets[i]);
      $scope.budgets = localStorageService.getBudgets();
    };
  });
