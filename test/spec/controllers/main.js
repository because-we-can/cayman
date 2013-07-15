'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('caymanApp'));

  var AccountsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccountsCtrl = $controller('AccountsCtrl', {
      $scope: scope
    });
  }));

  it('should attach two accounts to the scope', function () {
    expect(scope.accounts.length).toBe(2);
  });
  it('should attach a check account first', function() {
    expect(scope.accounts[0].name).toBe("Check account");
  });
  it('should attach a savings account secondly', function () {
    expect(scope.accounts[1].name).toBe("Savings account");
  });
});
