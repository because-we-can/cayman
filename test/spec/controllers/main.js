'use strict';

describe('MainCtrl tests', function () {

  var mainCtrl;
  var mockLocalStorageService;
  var scope;

  var EXISITING_ACCOUNT = {name:'An existing account'};
  var NEW_ACCOUNT = {name:'A new account'};
  var EXISTING_BUDGET = {name:'An existing budget'};
  var NEW_BUDGET = {name: 'A new budget'};

  beforeEach(inject(function ($controller, $rootScope) {
    mockLocalStorageService = angular.injector(['caymanServices']).get('localStorageService');
    spyOn(mockLocalStorageService, 'getAccounts').andReturn([EXISITING_ACCOUNT]);
    spyOn(mockLocalStorageService, 'addAccount');
    spyOn(mockLocalStorageService, 'getBudgets').andReturn([EXISTING_BUDGET]);
    spyOn(mockLocalStorageService, 'addBudget');

    scope = $rootScope.$new();
    mainCtrl = $controller('MainCtrl', {
      $scope: scope,
      localStorageService: mockLocalStorageService
    });
  }));

  it('calls the localStorageService to attach accounts to the scope', function () {
    expect(scope.accounts).toEqual([EXISITING_ACCOUNT]);
    expect(mockLocalStorageService.getAccounts).toHaveBeenCalled();
  });

  it('calls the localStorageService to attach budgets to the scope', function () {
    expect(scope.budgets).toEqual([EXISTING_BUDGET]);
    expect(mockLocalStorageService.getBudgets).toHaveBeenCalled();
  });

  it('adds a new account to the scope and calls the localStorageService', function() {
    scope.addAccount(NEW_ACCOUNT.name);

    expect(scope.accounts).toEqual([EXISITING_ACCOUNT, NEW_ACCOUNT]);
    expect(mockLocalStorageService.addAccount).toHaveBeenCalledWith(NEW_ACCOUNT);
  });

  it('adds a new budget to the scope and calls the localStorageService', function() {
    scope.addBudget(NEW_BUDGET.name);

    expect(scope.budgets).toEqual([EXISTING_BUDGET, NEW_BUDGET]);
    expect(mockLocalStorageService.addBudget).toHaveBeenCalledWith(NEW_BUDGET);
  });
});
