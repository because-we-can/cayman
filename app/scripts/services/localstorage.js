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
    addAccount : function(accountToAdd) {
      if(!accountToAdd) return;
      var newAccounts = this.getAccounts().concat(accountToAdd);
      window.localStorage.setItem(keys.accounts, JSON.stringify(newAccounts));
    },
    getBudgets : function() {
      return JSON.parse(window.localStorage.getItem(keys.budgets) || '[]');
    },
    addBudget : function (budgetToAdd) {
      if(!budgetToAdd) return;
      var newBudgets = this.getBudgets().concat(budgetToAdd);
      window.localStorage.setItem(keys.budgets, JSON.stringify(newBudgets));
    }
  };
});
