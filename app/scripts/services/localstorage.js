'use strict';

angular.module('caymanServices', [], function($provide) {
  $provide.factory('localStorageService', function() {
    var app = 'cayman.';
    var keys = {
      accounts : app + 'accounts',
      budgets : app + 'budgets'
    };

    return {
      getAccounts : function() {
        return window.localStorage.getItem(keys.accounts);
      },
      getBudgets : function() {
        return window.localStorage.getItem(keys.budgets);
      }
    };
  });
});
