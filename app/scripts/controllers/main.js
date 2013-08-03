'use strict';

angular.module('caymanApp')
    .controller('MainCtrl', function ($scope) {
      $scope.accounts = ['Check', 'Savings'];
      $scope.budgets = ['Vacations', 'New laptop'];
      $scope.newAccountName = '';
      $scope.newBudgetName = '';

      $scope.addAccount = function(newAccountName) {
        if(!newAccountName) {
          return;
        }
        $scope.accounts.push(newAccountName);
        $scope.newAccountName = '';
      };

      $scope.addBudget = function(newBudgetName) {
        if(!newBudgetName) {
          return;
        }
        $scope.budgets.push(newBudgetName);
        $scope.newBudgetName = ''
      }
    });
