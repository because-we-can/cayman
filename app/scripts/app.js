'use strict';

angular.module('caymanApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/accounts.html',
        controller: 'AccountsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
