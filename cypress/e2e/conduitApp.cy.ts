/// <reference types="cypress" />
import { expect } from "chai";

describe('template spec', () => {
    // An application under test ( AUT )

    let randomData = Math.random().toString(36).substring(2);
    const username = "Auto" + randomData;
    const email = "auto_email" + randomData + randomData + "@test.com";
    const password = 'password1234!';

    beforeEach(() => {
        cy.visit('https://angularjs.realworld.io/#/');
    });

    it('Sign up', () => {
        cy.intercept('POST', '**/*.realworld.io/api/users').as('createUser');

        cy.contains('Sign up').click()
        cy.get('input[placeholder="Username"]').clear().type(username);
        cy.get('input[placeholder="Email"]').clear().type(email);
        cy.get('input[placeholder="Password"]').clear().type(password);
        cy.get('button[type="submit"]').click();

        cy.wait('@createUser', { timeout: 5000 }).then(({ request, response }) => {
            // cy.log("Request: " + JSON.stringify(request));
            // cy.log("Response: " + JSON.stringify(response));
            // cy.log('User name is : ' + JSON.stringify(request?.body.user.email));
            expect(response?.statusCode).to.eq(201);
            expect(request?.body.user.username).to.eq(username);
            expect(request?.body.user.email).to.eq(email);
        })

    });

    it('Sign in', () => {
        cy.contains('Sign in').click();
        cy.get('input[placeholder="Email"]').clear().type(email);
        cy.get('input[placeholder="Password"]').clear().type(password);
        cy.get('button[type="submit"]').click();
        cy.get(':nth-child(4) > .nav-link').should('exist').contains(username);
    });

    // Mocking data !! 
    it('Mocking popular tags', () => {
        // cy.mock_tags(email, password);
        cy.intercept('GET', '**/tags', { fixture: 'popularTags.json' }).as('tags');
        
        cy.contains('Sign in').click();
        cy.get('input[placeholder="Email"]').clear().type(email);
        cy.get('input[placeholder="Password"]').clear().type(password);
        cy.get('button[type="submit"]').click();
        cy.get('.tag-list').should('contain', 'Binoy')
            .and('contain', 'Cypress')
            .and('contain', 'implementations');
    });

    it('Mocking feed data', () => {
        cy.mock_articles(email, password);
        cy.wait('@articles').then(({request, response}) => {
            expect(response?.body.articles[1].title).to.eq('Welcome BT fab');
        })
    });
})