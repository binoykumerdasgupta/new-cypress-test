describe('Lets do some api testing thing', () => {
  const navBarText = 'cypress.io';
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/network-requests');
    cy.findAllByText(navBarText).should('exist');
    // fat arrow sometimes not work with this object there fore normal function been used
    cy.fixture('example').then(function (data) {
      this.data = data;
      cy.log('This object data ::: ', this.data);
    });
  });

  it('lets visit Network requests page', () => {
    cy.get('h1').should('exist').should('contain.text', 'Network Requests');
  });

  it('Lets use fixture data in a network intercept calls', function () {
    cy.intercept('GET', '**/comments/*', this.data).as('getComment');
    cy.get('.network-btn').click();
    // cy.wait('@getComment')
    //   .its('response.statusCode')
    //   .should('be.oneOf', [200, 304]);
    cy.wait('@getComment').then((response) => {
      cy.log(`RESPONSE:::: ${response}`);
    });
  });

  it('Lets posting some data', () => {
    cy.intercept('POST', '**/comments/*').as('postComment');
    // we have code that posts a comment when
    cy.get('.network-post').click();
    cy.wait('@postComment').should(({ request, response }) => {
      expect(request.body).to.include('email');
      expect(request.headers).to.have.property('content-type');
      expect(response && response.body).to.have.property(
        'name',
        'Using POST in cy.intercept()'
      );
    });
  });

  it('Lets update some data', () => {
    let message = 'whoa, this comment does not exist';

    // Stub a response to PUT comments/ ****
    cy.intercept(
      {
        method: 'PUT',
        url: '**/comments/*',
      },
      {
        statusCode: 404,
        body: { error: message },
        headers: { 'access-control-allow-origin': '*' },
        delayMs: 500,
      }
    ).as('putComment');

    // we have code that puts a comment when
    cy.get('.network-put').click();

    cy.wait('@putComment');

    // our 404 statusCode logic in scripts.js executed
    cy.get('.network-put-comment').should('contain', message);
  });
});
