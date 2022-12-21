import { themes } from '../../../src/styles/themes';
import color from 'onecolor';

describe('Settings FC e2e', () => {
  beforeEach(() => {
    cy.visit('/settings-fc');
  });

  it('Clear history button should exist', () => {
    cy.get('#clearHistory').should('have.text', 'Clear History');
  });

  it('Theme select should work', () => {
    // Initial theme should be dark.
    cy.get('#mainLayout')
      .then(($el) => $el.css('background-color')) // get color value
      .should((colorValue) => {
        expect(color(colorValue).hex()).to.eq(themes.dark.background);
      });

    // Select dark theme
    cy.get('#themeSelect').select('light').invoke('val').should('eq', 'light');

    cy.get('#mainLayout')
      .then(($el) => $el.css('background-color'))
      .should((colorValue) => {
        expect(color(colorValue).hex()).to.eq(themes.light.background);
      });

    // Select colorful theme
    cy.get('#themeSelect')
      .select('colorful')
      .invoke('val')
      .should('eq', 'colorful');

    cy.get('#mainLayout')
      .then(($el) => $el.css('background-color')) // get color value
      .should((colorValue) => {
        expect(color(colorValue).hex()).to.eq(themes.colorful.background);
      });
  });
});
