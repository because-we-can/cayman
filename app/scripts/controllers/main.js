'use strict';

angular.module('caymanApp')
    .controller('MainCtrl', function ($scope) {
      $scope.accounts = JSON.parse(localStorage.getItem('cayman.accounts')) || [];

      $scope.addAccount = function (account) {
        $scope.accounts.push(account);
      };

      $scope.removeAccount = function (account) {
        $scope.accounts.push(account);
      };

      $scope.$watch('accounts', function (newItems, oldItems) {
        localStorage.setItem('cayman.accounts', JSON.stringify($scope.accounts));
      }, true);
    });
