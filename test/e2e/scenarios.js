'use strict';

describe('Cayman App', function() {

  describe('Main view', function() {

    beforeEach(function() {
      browser().navigateTo('/');
      expect(browser().location().url()).toBe('hi');
    });


    it('should display the accounts list', function() {
      expect(repeater('.accounts li', 'accounts list').count()).toBe(2);
      expect(repeater('.accounts li', 'accounts list').row(0)).toBe('Check');
      expect(repeater('.accounts li', 'accounts list').row(1)).toBe('Savings');
    });

    it('should display the budgets list', function() {
      expect(repeater('.budgets li', 'budgets list').count()).toBe(2);
      expect(repeater('.budgets li', 'budgets list').row(0)).toBe('Vacations');
      expect(repeater('.budgets li', 'budgets list').row(1)).toBe('New Laptop');
    });
  });
});
