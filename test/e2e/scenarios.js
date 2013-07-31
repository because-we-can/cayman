'use strict';

describe('Cayman App', function () {

  describe('Main view', function () {

    beforeEach(function () {
      browser().navigateTo('/');
    });


    it('should display the accounts list', function () {
      expect(repeater('.accounts li', 'accounts list').count()).toBe(2);
      expect(repeater('.accounts li', 'accounts list').row(0)).toEqual(['Check']);
      expect(repeater('.accounts li', 'accounts list').row(1)).toEqual(['Savings']);
    });

    it('should display the budgets list', function () {
      expect(repeater('.budgets li', 'budgets list').count()).toBe(2);
      expect(repeater('.budgets li', 'budgets list').row(0)).toEqual(['Vacations']);
      expect(repeater('.budgets li', 'budgets list').row(1)).toEqual(['New laptop']);
    });
  });
});
