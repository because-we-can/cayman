'use strict';

describe('LocalStorageService tests', function() {

	var localStorageService;
	var store;

	beforeEach(function() {
		var $injector = angular.injector(['caymanServices']);
		localStorageService = $injector.get('localStorageService');

		store = {};
		spyOn(localStorage, 'getItem');//.andCallFake(function (key) {return store[key];});
  		spyOn(localStorage, 'setItem');//.andCallFake(function (key, value) {return store[key] = value + '';});});
  		spyOn(localStorage, 'clear');//.andCallFake(function () {store = {};});
  		
  	});

  	it('should be able to get accounts', function() {
  		var accounts = localStorageService.getAccounts();
  		expect(localStorage.getItem).toHaveBeenCalledWith('cayman.accounts');
  	});

  	it('should be able to get budgets', function() {
  		var budgets = localStorageService.getBudgets();
  		expect(localStorage.getItem).toHaveBeenCalledWith('cayman.budgets');
  	});


});
