describe('My first test for ktchen-sink', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.get('h1').should('contain.text', 'Actions');
  });
  // with in aelement level
  it('playing with some mouse over events', () => {
    cy.get('.action-btn').click();
    cy.findByText('This popover shows up on click').should('be.visible');

    cy.get('#action-canvas').click('top');
    cy.get('#action-canvas').click('topRight');
    cy.get('#action-canvas').click('left');
  });
});
