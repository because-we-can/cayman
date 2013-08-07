'use strict';

describe('LocalStorageService tests', function() {

  var ACCOUNTS_KEY = 'cayman.accounts';
  var ACCOUNT = {name : 'Test account'};
  var ACCOUNT_JSON = JSON.stringify([ACCOUNT]);

  var BUDGETS_KEY = 'cayman.budgets';
  var BUDGET = {name: 'Test budget'};
  var BUDGET_JSON = JSON.stringify([BUDGET]);

	var localStorageService;
	var store

	beforeEach(function() {
		localStorageService = angular.injector(['caymanServices']).get('localStorageService');

    store = {};
	 	spyOn(window.localStorage, 'getItem').andCallFake(
      function (key) {return store[key];}
    );
  	spyOn(window.localStorage, 'setItem').andCallFake(
      function (key, value) {return store[key] = value + '';}
    );
  	spyOn(window.localStorage, 'clear').andCallFake(
      function () {store = {};}
      );
  });

  it('gets accounts', function() {
    store[ACCOUNTS_KEY] = ACCOUNT_JSON;

  	var accounts = localStorageService.getAccounts();

 		expect(localStorage.getItem).toHaveBeenCalledWith(ACCOUNTS_KEY);
    expect(accounts).toEqual([ACCOUNT]);
 	});

  it('returns an empty array if no accounts to get', function() {
    var accounts = localStorageService.getAccounts();

    expect(localStorage.getItem).toHaveBeenCalledWith(ACCOUNTS_KEY);
    expect(accounts).toEqual([]);
  });

  it('adds accounts', function() {
    localStorageService.addAccount(ACCOUNT);

    expect(window.localStorage.setItem).toHaveBeenCalledWith(ACCOUNTS_KEY, ACCOUNT_JSON);
    expect(store[ACCOUNTS_KEY]).toEqual(ACCOUNT_JSON);
  });

  it('does nothing if no accounts to add', function() {
    localStorageService.addAccount(null);

    expect(window.localStorage.setItem).wasNotCalled();
    expect(store[ACCOUNTS_KEY]).toBeUndefined();
  });

  it('gets budgets', function() {
    store[BUDGETS_KEY] = BUDGET_JSON;

  	var budgets = localStorageService.getBudgets();

 		expect(window.localStorage.getItem).toHaveBeenCalledWith(BUDGETS_KEY);
    expect(budgets).toEqual([BUDGET]);
 	});

  it('returns an empty array if no budgets to get', function() {
    var budgets = localStorageService.getBudgets();

    expect(localStorage.getItem).toHaveBeenCalledWith(BUDGETS_KEY);
    expect(budgets).toEqual([]);
  });

  it('adds budgets', function() {
    localStorageService.addBudget(BUDGET);

    expect(localStorage.setItem).toHaveBeenCalledWith(BUDGETS_KEY, BUDGET_JSON);
    expect(store[BUDGETS_KEY]).toEqual(BUDGET_JSON);
  });

  it('does nothing if no budgets to add', function() {
    localStorageService.addBudget(null);

    expect(localStorage.setItem).wasNotCalled();
    expect(store[BUDGETS_KEY]).toBeUndefined();
  });

});
