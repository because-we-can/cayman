'use strict';

angular.module('caymanServices', [])
.factory('localStorageService', function() {
  var CAYMAN_KEY = 'cayman';
  var ACCOUNTS_KEY = CAYMAN_KEY + '.accounts';
  var BUDGETS_KEY = CAYMAN_KEY + '.budgets';

  var set = function(key, newObjs) {
    window.localStorage.setItem(key, JSON.stringify(newObjs));
  };
  var get = function(key) {
    var stored = window.localStorage.getItem(key);
    if (!stored) return [];
    return JSON.parse(stored);
  };
  var index = function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if(arr[i].name === item.name) return i;
    }
    return -1;
  };

  return {
    getAccounts : function() {
      return get(ACCOUNTS_KEY);
    },
    addAccount : function(toAdd) {
      if(!toAdd) return;

      var accounts = this.getAccounts();
      if(index(accounts, toAdd) >= 0) return;

      set(ACCOUNTS_KEY, accounts.concat(toAdd));
    },
    removeAccount : function(toRemove) {
      if(!toRemove) return;

      var accounts = this.getAccounts();
      var indexToRemove = index(accounts, toRemove)
      if(indexToRemove < 0) return;

      accounts.splice(indexToRemove, 1);
      set(ACCOUNTS_KEY, accounts);
    },
    getBudgets : function() {
      return get(BUDGETS_KEY);
    },
    addBudget : function (toAdd) {
      if(!toAdd) return;

      var budgets = this.getBudgets();
      if(!index(budgets, toAdd)) return;

      set(BUDGETS_KEY, budgets.concat(toAdd));
    },
    removeBudget : function(toRemove) {
      if(!toRemove) return;

      var budgets = this.getBudgets();
      var indexToRemove = index(budgets, toRemove);
      if(indexToRemove < 0) return;

      budgets.splice(indexToRemove, 1);
      set(BUDGETS_KEY, budgets);
    }
  };
});
