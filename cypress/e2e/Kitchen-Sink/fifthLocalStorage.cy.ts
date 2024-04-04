describe('Lets do some api testing thing', () => {
  const navBarText = 'cypress.io';
  const token = 'abc123'
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.findAllByText(navBarText).should('exist');
    // fat arrow sometimes not work with this object there fore normal function been used
    cy.fixture('example').then(function (data) {
      this.data = data;
      cy.log('This object data ::: ', this.data);
    });
  });

  it('sets and gets a local storage', () => {
    cy.setLocalStorage('token', token);
    cy.getLocalStorage('token').should('eq', token);
  });

  it('Typing with some sensitive data', () => {
    cy.findByPlaceholderText('Email')
      .type('binoy')
    cy.findByPlaceholderText('Email')
    // .type('binoy', { sensitive: true })

  })


});
