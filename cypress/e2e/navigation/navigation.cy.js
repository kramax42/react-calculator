const { baseUrl } = Cypress.config();

describe('Navigation e2e', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.viewport('macbook-16');
  });

  it('Settings(FC) navigation should work', () => {
    cy.contains('Settings(FC)').click();
    cy.url().should('eq', `${baseUrl}/settings-fc`);
  });

  it('Home(FC) navigation should work', () => {
    cy.contains('Home(FC)').click();
    cy.url().should('eq', `${baseUrl}/`);
  });

  it('Settings(CC) navigation should work', () => {
    cy.contains('Settings(CC)').click();
    cy.url().should('eq', `${baseUrl}/settings-cc`);
  });

  it('Home(CC) navigation should work', () => {
    cy.contains('Home(CC)').click();
    cy.url().should('eq', `${baseUrl}/home-cc`);
  });
});
