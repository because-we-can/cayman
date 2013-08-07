'use strict';

angular.module('caymanApp', ['caymanServices'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {templateUrl: 'views/main.html', controller: 'MainCtrl'})
      .otherwise({redirectTo: '/'})
    });

