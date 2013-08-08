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
  }

  $scope.removeAccount = function(oldAccountName) {
    if(!oldAccountName) return;

    localStorageService.removeAccount({name:oldAccountName});
    $scope.accounts = localStorageService.getAccounts();
  }
};
