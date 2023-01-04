import { CALCULATOR_BUTTONS } from '@constants/calculator';
import { getKeyByValue } from '@utils/get-key-by-value';

import { expressions, expressionsSequence } from './expressions';

describe('Home page CC e2e', () => {
  it('keypad buttons should exist', () => {
    cy.visit('/home-cc');
    Object.keys(CALCULATOR_BUTTONS).forEach((keypadKey) => {
      cy.get(`button[data-keypad-value="${keypadKey}"]`).should(
        'have.text',
        CALCULATOR_BUTTONS[keypadKey],
      );
    });
  });

  it('display component should contain correct value after click on keypad buttons', () => {
    let expectedDisplayValue = '';
    for (let i = 9; i >= 0; i -= 1) {
      expectedDisplayValue += i.toString();
      const keypadValue = getKeyByValue(CALCULATOR_BUTTONS, i.toString());
      cy.get(`button[data-keypad-value="${keypadValue}"]`).click();
    }

    cy.get('#entryDisplay').contains(expectedDisplayValue);
  });

  context('calculator functionality and history', () => {
    it('entry should display correct number after calculation', () => {
      expressions.forEach(({ commands, equals }) => {
        cy.get(`button[data-keypad-value="clean"]`).click();

        commands.forEach((commandValue) => {
          const keypadValue = getKeyByValue(CALCULATOR_BUTTONS, commandValue);
          cy.get(`button[data-keypad-value="${keypadValue}"]`).click();
        });

        cy.get('#entryDisplay').contains(equals);
      });
    });

    it('history should contain correct values', () => {
      for (let i = 0; i < expressions.length; i += 1) {
        const { expression, equals } = expressions[i];
        const expectedHistoryItem = `${i + 1}) ${expression} = ${equals}`;

        cy.get(`div[data-history-item-index="${i}"]`).should(
          'have.text',
          expectedHistoryItem,
        );
      }
    });

    it('history should be empty after click on Clear History button', () => {
      cy.get('#emptyHistoryText').should('not.exist');
      cy.get('#clearHistory').click();
      cy.get('#emptyHistoryText').should('have.text', 'History is empty');
    });

    it('history should be able to toggle visibility', () => {
      cy.get('#historyTitle').should('exist').should('have.text', 'History');

      cy.get('#toggleHistoryVisibility').click();

      cy.get('#historyTitle').should('not.exist');
    });

    // Example:
    // entry = Infinity
    // user click on 3
    // entry should be 3 (not Infinity3)
    it('entry should display correct number in corner cases (Infinity, NaN)', () => {
      cy.get(`button[data-keypad-value="clean"]`).click();

      expressionsSequence.forEach(({ commands, equals }) => {
        commands.forEach((commandValue) => {
          const keypadValue = getKeyByValue(CALCULATOR_BUTTONS, commandValue);
          cy.get(`button[data-keypad-value="${keypadValue}"]`).click();
        });

        cy.get('#entryDisplay').contains(equals);
      });
    });
  });
});
