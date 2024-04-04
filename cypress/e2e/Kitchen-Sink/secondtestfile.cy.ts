// Lets using a cypress testing libraries leveraging React testing dom

describe('My first test for ktchen-sink', () => {
  const navBarText = 'cypress.io';
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.findAllByText(navBarText).should('exist');
  });
  // with in aelement level
  it('Inputting value in Email placrholder - async call ', () => {
    // since non cypress commands gets excuted first
    cy.findByPlaceholderText('Email').type('asyncCall@test.co.uk');
    cy.wait(2000);
    console.log('Test is executed');
  });

  // when to use thrn() -non cypress commands
  it('Inputting value in Email placrholder -  for sync call ', () => {
    // sync test will more controllable the way we want .then()
    cy.findByPlaceholderText('Email').type('asyncCall@test.co.uk');
    cy.wait(2000).then(() => {
      console.log('Test is executed');
    });
  });

  it('API data fetch with sync data call', () => {
    // sync test will more controllable the way we want .then()
    cy.findByPlaceholderText('Email').type('asyncCall@test.co.uk');
    cy.wait(2000).then(() => {
      console.log('Test is executed');
      fetch('https://api.spacexdata.com/v3/missions')
        .then((res) => res.json)
        .then((data) => console.log(data));
    });
  });

  it('Using a drop down ment navigate to Traversal page', () => {
    cy.get('.dropdown-menu').find('li').eq(1).should('have.text', 'Traversal');
  });

  it('Using a drop down menu find a tag and href', () => {
    cy.get('.dropdown-menu')
      .find('li')
      .find('a')
      .should('have.attr', 'href', '/commands/querying');
  });

  it('Click a page - Location', () => {
    cy.findAllByText('Location').click({ force: true });
    cy.url().should('include', '/commands/location');
  });

  it('type someting in the input field', () => {
    cy.findByPlaceholderText('Email')
      .type('binoy')
      .should('have.value', 'binoy');
  });

  it('type someting in the label text input field called Describe', () => {
    cy.findByLabelText('Describe:')
      .type('hello automation')
      .should('have.value', 'hello automation')
      .then(() => {
        cy.wait(2000);
        cy.findByLabelText('Describe:').clear().should('have.value', '');
      });
  });

  it('should check box', () => {
    cy.get('.action-checkboxes [type="checkbox"]').first().check().should('be.checked');
    // .not('[disabled]')
    // .check()
    // .should('be.checked');
  });
});
