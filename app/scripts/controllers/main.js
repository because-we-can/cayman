'use strict';

function MainCtrl($scope, localStorageService) {
  $scope.accounts = localStorageService.getAccounts();
  $scope.budgets = localStorageService.getBudgets();
  $scope.newAccountName = '';
  $scope.newBudgetName = '';

  $scope.addAccount = function(newAccountName) {
    if(!newAccountName) return;

    localStorageService.addAccount({name:newAccountName});
    $scope.accounts = localStorageService.getAccounts();
    $scope.newAccountName = '';
  };

  $scope.addBudget = function(newBudgetName) {
    if(!newBudgetName) return;

    localStorageService.addBudget({name:newBudgetName});
    $scope.budgets = localStorageService.getBudgets();
    $scope.newBudgetName = '';
  };

  $scope.removeAccount = function(index) {
    localStorageService.removeAccount($scope.accounts[index]);
    $scope.accounts = localStorageService.getAccounts();
  };

  $scope.removeBudget = function(i) {
    localStorageService.removeBudget($scope.budgets[i]);
    $scope.budgets = localStorageService.getBudgets();
  };
};
