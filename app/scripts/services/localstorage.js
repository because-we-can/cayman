'use strict';

angular.module('caymanServices', [])
  .factory('localStorageService', function() {
  var app = 'cayman.';
  var keys = {
    accounts : app + 'accounts',
    budgets : app + 'budgets'
  };

  return {
    getAccounts : function() {
      return JSON.parse(window.localStorage.getItem(keys.accounts) || '[]');
    },
    addAccounts : function(accountsToAdd) {
      if(!accountsToAdd || accountsToAdd.length == 0) return;
      var newAccounts = this.getAccounts().concat(accountsToAdd);
      window.localStorage.setItem(keys.accounts, JSON.stringify(newAccounts));
    },
    getBudgets : function() {
      return JSON.parse(window.localStorage.getItem(keys.budgets) || '[]');
    },
    addBudgets : function (budgetsToAdd) {
      if(!budgetsToAdd || budgetsToAdd.length == 0) return;
      var newBudgets = this.getBudgets().concat(budgetsToAdd);
      window.localStorage.setItem(keys.budgets, JSON.stringify(newBudgets));
    }
  };
});
