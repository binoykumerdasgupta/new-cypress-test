/// <reference types="Cypress" />

describe('Contact us', () => {
    beforeEach(() => {
        cy.visit('https://reqres.in/');
        cy.wait(5000);
    });

    it('Providing some mocking data for users-single', () => {
        cy.intercept('GET', '**/api/users/2*', { fixture: 'reqres.json' }).as('single-user');

        cy.get('[data-id="users-single"]').click();

        // Validating data is present
        // cy.get('[data-key="output-response"]').should('contain', 'Binoy')
        // .and('contain', 'Cypress')
        // .and('contain', 'implementations');

        // ********* Another approach ( Better approach) *******************
        cy.wait('@single-user').then(({ request, response }) => {
            expect(response?.body.data.email).to.eq('binoy.cypress-mocking@reqres.in');
        });

    });

});