'use strict';

describe('MainCtrl tests', function () {

  // load the controller's module
  beforeEach(module('caymanApp'));

  var MainCtrl;
  var scope;
  var ACCOUNT_NAME = 'A test account';
  var BUDGET_NAME = "A budget name";

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach 2 accounts to the scope', function () {
    expect(scope.accounts).toBeDefined();

    var accounts = scope.accounts;
    expect(accounts.length).toBe(2);
    expect(accounts[0]).toBe('Check');
    expect(accounts[1]).toBe('Savings');
  });

  it('should attach 2 budgets to the scope', function () {
    expect(scope.budgets).toBeDefined();

    var budgets = scope.budgets;
    expect(budgets.length).toBe(2);
    expect(budgets[0]).toBe('Vacations');
    expect(budgets[1]).toBe('New laptop');
  });

  it('adds a new account to the scope', function() {
    scope.addAccount(ACCOUNT_NAME);

    expect(scope.accounts.length).toBe(3);
    expect(scope.accounts[2]).toBe(ACCOUNT_NAME);
  });

  it('adds a new budget to the scope', function() {
    scope.addBudget(BUDGET_NAME);

    expect(scope.budgets.length).toBe(3);
    expect(scope.budgets[2]).toBe(BUDGET_NAME);
  });
});
