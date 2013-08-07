'use strict';

function MainCtrl($scope, localStorageService) {
  $scope.accounts = localStorageService.getAccounts();
  $scope.budgets = localStorageService.getBudgets();
  $scope.newAccountName = '';
  $scope.newBudgetName = '';

  $scope.addAccount = function(newAccountName) {
    if(!newAccountName) return;

    var toAdd = {name:newAccountName};
    $scope.accounts.push(toAdd);
    localStorageService.addAccount(toAdd);
    $scope.newAccountName = '';
  };

  $scope.addBudget = function(newBudgetName) {
    if(!newBudgetName) return;

    var toAdd = {name:newBudgetName};
    $scope.budgets.push(toAdd);
    localStorageService.addBudget(toAdd);
    $scope.newBudgetName = '';
  }
};
