'use strict';

describe('LocalStorageService tests', function() {

  var ACCOUNTS_KEY = 'cayman.accounts';
  var ACCOUNTS_ARRAY = [{name : 'Test account 1'}, {name : 'Test account 2'}];
  var ACCOUNTS_JSON = JSON.stringify(ACCOUNTS_ARRAY);

  var BUDGETS_KEY = 'cayman.budgets';
  var BUDGETS_ARRAY = [{name: 'Test budget 1'}, {name : 'Test budget 2'}];
  var BUDGETS_JSON = JSON.stringify(BUDGETS_ARRAY);

	var localStorageService;
	var store

	beforeEach(function() {
		var $injector = angular.injector(['caymanServices']);
		localStorageService = $injector.get('localStorageService');

    store = {};
	 	spyOn(localStorage, 'getItem').andCallFake(function (key) {return store[key];});
  	spyOn(localStorage, 'setItem').andCallFake(function (key, value) {return store[key] = value + '';});
  	spyOn(localStorage, 'clear').andCallFake(function () {store = {};});
  });

  it('gets accounts', function() {
    store[ACCOUNTS_KEY] = ACCOUNTS_JSON;

  	var actualAccounts = localStorageService.getAccounts();

 		expect(localStorage.getItem).toHaveBeenCalledWith(ACCOUNTS_KEY);
    expect(actualAccounts).toEqual(ACCOUNTS_ARRAY);
 	});

  it('returns an empty array if no accounts to get', function() {
    var actualAccounts = localStorageService.getAccounts();

    expect(localStorage.getItem).toHaveBeenCalledWith(ACCOUNTS_KEY);
    expect(actualAccounts).toEqual([]);
  });

  it('adds accounts', function() {
    localStorageService.addAccounts(ACCOUNTS_ARRAY);

    expect(localStorage.setItem).toHaveBeenCalledWith(ACCOUNTS_KEY, ACCOUNTS_JSON);
    expect(store[ACCOUNTS_KEY]).toEqual(ACCOUNTS_JSON);
  });

    it('does nothing if no accounts to add', function() {
    localStorageService.addAccounts(null);

    expect(localStorage.setItem).wasNotCalled();
    expect(store[ACCOUNTS_KEY]).toBeUndefined();
  });

  it('does nothing if empty accounts to add', function() {
    localStorageService.addAccounts([]);

    expect(localStorage.setItem).wasNotCalled();
    expect(store[ACCOUNTS_KEY]).toBeUndefined();
  });

  it('gets budgets', function() {
    store[BUDGETS_KEY] = BUDGETS_JSON;

  	var actualBudgets = localStorageService.getBudgets();

 		expect(localStorage.getItem).toHaveBeenCalledWith(BUDGETS_KEY);
    expect(actualBudgets).toEqual(BUDGETS_ARRAY);
 	});

  it('returns an empty array if no budgets to get', function() {
    var actualBudgets = localStorageService.getBudgets();

    expect(localStorage.getItem).toHaveBeenCalledWith(BUDGETS_KEY);
    expect(actualBudgets).toEqual([]);
  });

  it('adds budgets', function() {
    localStorageService.addBudgets(BUDGETS_ARRAY);

    expect(localStorage.setItem).toHaveBeenCalledWith(BUDGETS_KEY, BUDGETS_JSON);
    expect(store[BUDGETS_KEY]).toEqual(BUDGETS_JSON);
  });

  it('does nothing if no budgets to add', function() {
    localStorageService.addBudgets(null);

    expect(localStorage.setItem).wasNotCalled();
    expect(store[BUDGETS_KEY]).toBeUndefined();
  });

  it('does nothing if empty budgets to add', function() {
    localStorageService.addBudgets([]);

    expect(localStorage.setItem).wasNotCalled();
    expect(store[BUDGETS_KEY]).toBeUndefined();
  });
});
