'use strict';

describe('Cayman App', function () {

  describe('Main view', function () {

    beforeEach(function () {
      browser().navigateTo('/');
      window.localStorage.clear();
    });

    it('displays a form to add accounts', function () {
      expect(repeater('.accounts li', 'accounts list').count()).toBe(1);
      expect(element('.accounts li input', 'new accounts input').attr('placeholder')).toBe('New account name...');
      expect(element('.accounts li button', 'new accounts button').text()).toBe('+');
      expect(element('.accounts h3', 'accounts title').text()).toBe('0 account(s)');
    });

    var clickAddAccount = function(accountName) {
      input('newAccountName').enter(accountName);
      element('.accounts li:nth-last-child(1) button', 'add account button').click();
    };

    var clickRemoveAccount = function(accountIndex) {
      element('.accounts li:nth('+accountIndex+') button', 'remove account '+accountIndex).click();
    };

    it('adds two new accounts and then removes one', function() {
      var firstNewAccount = 'Added then deleted';
      var secondNewAccount = 'Added and kept';

      clickAddAccount(firstNewAccount);
      clickAddAccount(secondNewAccount);
      expect(repeater('.accounts li', 'accounts list').count()).toBe(3);
      expect(repeater('.accounts li', 'accounts list').column('account.name')).toEqual([firstNewAccount, secondNewAccount]);
      expect(element('.accounts h3', 'accounts title').text()).toBe('2 account(s)');

      clickRemoveAccount(0);
      expect(repeater('.accounts li', 'accounts list').count()).toBe(2);
      expect(repeater('.accounts li', 'accounts list').column('account.name')).toEqual([secondNewAccount]);
      expect(element('.accounts h3', 'accounts title').text()).toBe('1 account(s)');
    });

    var clickAddBudget = function(budgetName) {
      input('newBudgetName').enter(budgetName);
      element('.budgets li:nth-last-child(1) button', 'add budget button').click();
    };

    var clickRemoveBudget = function(budgetIndex) {
      element('.budgets li:nth('+budgetIndex+') button', 'remove budget '+budgetIndex).click();
    };

    it('displays a form to add budgets', function () {
      expect(repeater('.budgets li', 'budgets list').count()).toBe(1);
      expect(element('.budgets li input', 'new budgets input').attr('placeholder')).toBe('New budget name...');
      expect(element('.budgets li button', 'new budgets button').text()).toBe('+');
      expect(element('.budgets h3', 'budgets title').text()).toBe('0 budget(s)');
    });

    it('adds a new budget and then removes it', function() {
      var newBudget = 'A new budget';

      clickAddBudget(newBudget);
      expect(repeater('.budgets li', 'budgets list').count()).toBe(2);
      expect(repeater('.budgets li', 'budgets list').column('budget.name')).toEqual([newBudget]);
      expect(element('.budgets h3', 'budgets title').text()).toBe('1 budget(s)');

      clickRemoveBudget(0);
      expect(repeater('.budgets li', 'budgets list').count()).toBe(1);
      expect(element('.budgets h3', 'budgets title').text()).toBe('0 budget(s)');
    });

  });
});
