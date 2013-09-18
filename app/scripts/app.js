'use strict';

angular.module('caymanServices', []);
angular.module('caymanControllers', ['caymanServices']);
angular.module('caymanApp', ['caymanControllers']);

angular.module('caymanApp')
.config(
  function ($routeProvider, MainCtrl) {
    $routeProvider
    .when('/', {templateUrl: 'views/main.html', controller: MainCtrl})
    .otherwise({redirectTo: '/'});
  });

