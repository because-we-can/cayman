'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('caymanApp'));

  var MainCtrl  ,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl   = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach 2 accounts to the scope', function() {
    expect(scope.accounts).toBeDefined();

    var accounts = scope.accounts;
    expect(accounts.length).toBe(2);
    expect(accounts[0]).toBe('Check');
    expect(accounts[1]).toBe('Savings');
  });

  it('should attach 2 budgets to the scope', function () {
    expect(scope.budgets).toBeDefined();

    var budgets = scope.budgets
    expect(budgets[0]).toBe('Vacations');
    expect(budgets[1]).toBe('New laptop');
  });
});
