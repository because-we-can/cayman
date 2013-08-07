'use strict';

describe('LocalStorageService tests for accounts', function() {

  var ACCOUNTS_KEY = 'cayman.accounts';
  var ACCOUNT = {name : 'Test account'};
  var ACCOUNT_JSON = JSON.stringify([ACCOUNT]);

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

});
