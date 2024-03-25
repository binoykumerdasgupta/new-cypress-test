describe('My first test for ktchen-sink', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions');
  });
  // with in aelement level
  it('playing with get', () => {
    cy.get('h1').should('exist');
    cy.get('h1').should('contain.text', 'Actions');
  });

  // with in an element object such header text
  it('playing with find', () => {
    cy.get('.container').eq(1).find('p').should('exist').and('contain.text', 'Examples of actions being performed on DOM elements in Cypress, for a full reference of commands, go to docs.cypress.');
  });

  // renders a section with the correct element
  it('playing with within', () => {
    cy.get('.container').eq(2).within(() => {
      cy.get('h4').should('exist');
      cy.get('p').should('exist');
    });
  });

});
