'use strict';

describe('Cayman App', function () {

  describe('Main view', function () {

    beforeEach(function () {
      browser().navigateTo('/');
      window.localStorage.clear();

    });


    it('displays the accounts list and a form', function () {
      expect(repeater('.accounts li', 'accounts list').count()).toBe(1);

      expect(element('.accounts li input', 'new accounts input').html()).toBeDefined();
      expect(element('.accounts li button', 'new accounts button').html()).toBeDefined();

      expect(element('.accounts h3', 'accounts title').text()).toBe('2 account(s)');
    });

    it('adds a new account', function() {
      var newAccount = 'A new account';

      input('newAccountName').enter(newAccount);
      element('.accounts li:nth-last-child(1) button').click();

      expect(repeater('.accounts li', 'accounts list').count()).toBe(4);
      expect(repeater('.accounts li', 'accounts list').row(2)).toEqual([newAccount]);
      expect(element('.accounts h3', 'accounts title').text()).toBe('3 account(s)');
    });

    it('displays the budgets list and a form', function () {
      expect(repeater('.budgets li', 'budgets list').count()).toBe(3);
      expect(repeater('.budgets li', 'budgets list').row(0)).toEqual(['Vacations']);
      expect(repeater('.budgets li', 'budgets list').row(1)).toEqual(['New laptop']);

      expect(element('.budgets li input', 'new budgets input').html()).toBeDefined();
      expect(element('.budgets li button', 'new budgets button').html()).toBeDefined();

      expect(element('.budgets h3', 'budgets title').text()).toBe('2 budget(s)');
    });

    it('adds a new budget', function() {
      var newBudget = 'A new budget';

      input('newBudgetName').enter(newBudget);
      element('.budgets li:nth-last-child(1) button').click();

      expect(repeater('.budgets li', 'budgets list').count()).toBe(4);
      expect(repeater('.budgets li', 'budgets list').row(2)).toEqual([newBudget]);
      expect(element('.budgets h3', 'budgets title').text()).toBe('3 budget(s)');
    });

  });
});
