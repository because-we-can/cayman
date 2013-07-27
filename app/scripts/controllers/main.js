'use strict';

angular.module('caymanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.accounts = [
      {name:'Check account'},
      {name:'Savings account'}
    ];
  });
