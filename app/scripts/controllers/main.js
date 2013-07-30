'use strict';

angular.module('caymanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.accounts = ['Check', 'Savings'];
    $scope.budgets = ['Vacations', 'New laptop'];
  });
