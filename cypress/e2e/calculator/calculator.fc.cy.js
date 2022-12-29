import { CALCULATOR_BUTTONS } from '../../../src/constants/calculator';
import { getKeyByValue } from '../../../src/utils/get-key-by-value';

import { expressions, expressionsSequence } from './expressions';

describe('Home page FC e2e', () => {
  it('keypad buttons should exist', () => {
    cy.visit('/');
    Object.keys(CALCULATOR_BUTTONS).map((keypadKey) => {
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
      for (const { commands, equals } of expressions) {
        // Clean display and entry.
        cy.get(`button[data-keypad-value="clean"]`).click();

        for (const commandValue of commands) {
          const keypadValue = getKeyByValue(CALCULATOR_BUTTONS, commandValue);
          cy.get(`button[data-keypad-value="${keypadValue}"]`).click();
        }

        cy.get('#entryDisplay').contains(equals);
      }
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

      cy.get('#toggleHistoryVisibility')
        // .should('have.text', 'Hide History')
        .click();
      // .should('have.text', 'Show History');

      cy.get('#historyTitle').should('not.exist');
    });

    // Expressions for test what contains entry
    // when last entry value = Infinity
    // and user try to input new value without clicking
    // on removing buttons

    // Example:
    // entry = Infinity
    // user click on 3
    // entry shoul be 3 (not Infinity3)
    it('entry should display correct number in corner cases (Infinity, NaN)', () => {
      // Clean display and entry.
      cy.get(`button[data-keypad-value="clean"]`).click();

      for (const { commands, equals } of expressionsSequence) {
        for (const commandValue of commands) {
          const keypadValue = getKeyByValue(CALCULATOR_BUTTONS, commandValue);
          cy.get(`button[data-keypad-value="${keypadValue}"]`).click();
        }

        cy.get('#entryDisplay').contains(equals);
      }
    });
  });
});
