describe('Lets do some api testing thing', () => {
  const navBarText = 'cypress.io';
  before(() => {
    cy.request('https://api.spacexdata.com/v3/missions').its('body').should('have.length', 10)
  });

  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.findAllByText(navBarText).should('exist');
  });

  after(() => {
    cy.log('I am in the after block - as it runs only one time for each context/describe likes before()');
  });

  afterEach(() => {
    cy.log('I am in after each block')
  });

  it('lets visit Actions page', () => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.get('h1').should('exist').should('contain.text', 'Actions')
  });

  it('Lets use fixture data', () => {
    cy.fixture('example').then((data) => {
      cy.log(`DATA:::::: ${JSON.stringify(data)}`)
    })
  });

  it('Updated JSON data in fixture', () => {
    cy.fixture('example').then((data) => {
      data.name = 'Ishann';
      cy.log('Updated name is: ', data.name)
    })
  });

});