'use strict';

describe('MainCtrl tests', function () {

  var mainCtrl;
  var mockLocalStorageService;
  var scope;
  var ACCOUNT_NAME = 'A test account';
  var BUDGET_NAME = "A budget name";

  beforeEach(inject(function ($controller, $rootScope) {
    mockLocalStorageService = angular.injector(['caymanServices']).get('localStorageService');
    spyOn(mockLocalStorageService, 'getAccounts').andReturn([{name:ACCOUNT_NAME}]);
    spyOn(mockLocalStorageService, 'addAccounts');
    spyOn(mockLocalStorageService, 'getBudgets').andReturn([{name:BUDGET_NAME}]);
    spyOn(mockLocalStorageService, 'addBudgets');

    scope = $rootScope.$new();
    mainCtrl = $controller('MainCtrl', {
      $scope: scope,
      localStorageService: mockLocalStorageService});
  }));

  it('calls the localStorageService to attach accounts to the scope', function () {
    expect(scope.accounts).toBeDefined();
    expect(scope.accounts.length).toBe(1);
    expect(scope.accounts[0].name).toBe(ACCOUNT_NAME);

    expect(mockLocalStorageService.getAccounts).toHaveBeenCalled();
  });

  it('calls the localStorageService to attach budgets to the scope', function () {
    expect(scope.budgets).toBeDefined();
    expect(scope.budgets.length).toBe(1);
    expect(scope.budgets[0].name).toBe(BUDGET_NAME);

    expect(mockLocalStorageService.getBudgets).toHaveBeenCalled();
  });

  it('adds a new account to the scope and the localStorageService', function() {
    var newAccountName = 'A new account';

    scope.addAccount(newAccountName);

    expect(scope.accounts.length).toBe(2);
    expect(scope.accounts[0].name).toBe(ACCOUNT_NAME);
    expect(scope.accounts[1].name).toBe(newAccountName);
    expect(mockLocalStorageService.addAccounts).toHaveBeenCalledWith({name:newAccountName});
  });

  it('adds a new budget to the scope', function() {
    var newBudgetName = 'A new budget';

    scope.addBudget(newBudgetName);

    expect(scope.budgets.length).toBe(2);
    expect(scope.budgets[0].name).toBe(BUDGET_NAME);
    expect(scope.budgets[1].name).toBe(newBudgetName);
    expect(mockLocalStorageService.addBudgets).toHaveBeenCalledWith({name:newBudgetName});
  });
});
