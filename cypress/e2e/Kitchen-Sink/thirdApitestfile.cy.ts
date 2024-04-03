import { should } from "chai";

describe('Lets do some api testing thing', () => {
  const navBarText = 'cypress.io';
  before(() => {
    cy.request('https://api.spacexdata.com/v3/missions').its('body').should('have.length', 10)
  });

  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.findAllByText(navBarText).should('exist');
  });

  it('lets visit kitchen sink page', () => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.get('h1').should('exist').should('contain.text', 'Kitchen Sink')
  });

});