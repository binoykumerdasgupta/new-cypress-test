/// <reference types="cypress" />
import { expect } from "chai";
import { homepage } from "../support/pages/HomePage";
import * as Conduit from '../support/features/conduitApp/conduitCommandsWebUtils';
import { userInfo } from '../support/user_credentials';

describe('template spec', () => {
    // An application under test ( AUT )
    beforeEach(() => {
        homepage.visitConduitHomePage();
    });

    it.only('Sign up', () => {
        cy.intercept('POST', '**/*.realworld.io/api/users').as('createUser');
        Conduit.action.clickSignUpLink();
        Conduit.assert.SignUpButtonShown();

        Conduit.action.typeUserName();
        Conduit.action.typeEmail();
        Conduit.action.typePassword();
        Conduit.action.clickSignUpButton();

        cy.wait('@createUser', { timeout: 5000 }).then(({ request, response }) => {
            // cy.log("Request: " + JSON.stringify(request));
            // cy.log("Response: " + JSON.stringify(response));
            // cy.log('User name is : ' + JSON.stringify(request?.body.user.email));
            expect(response?.statusCode).to.eq(201);
            expect(request?.body.user.username).to.eq(userInfo.USER_NAME);
            expect(request?.body.user.email).to.eq(userInfo.EMAIL);
        });
    });

    it.only('Sign in', () => {
        Conduit.action.clickSignInLink();
        Conduit.assert.SignInButtonShown();
        Conduit.action.typeEmail();
        Conduit.action.typePassword();
        Conduit.action.clickSignInButton();
        Conduit.assert.UserNameShownInHomePage();
    });

    // // Mocking data !! 
    // xit('Mocking popular tags', () => {
    //     // cy.mock_tags(email, password);
    //     cy.intercept('GET', '**/tags', { fixture: 'popularTags.json' }).as('tags');

    //     cy.contains('Sign in').click();
    //     cy.get('input[placeholder="Email"]').clear().type(email);
    //     cy.get('input[placeholder="Password"]').clear().type(password);
    //     cy.get('button[type="submit"]').click();
    //     cy.get('.tag-list').should('contain', 'Binoy')
    //         .and('contain', 'Cypress')
    //         .and('contain', 'implementations');
    // });

    // xit('Mocking feed data', () => {
    //     cy.mock_articles(email, password);
    //     cy.wait('@articles').then(({ request, response }) => {
    //         expect(response?.body.articles[1].title).to.eq('Welcome BT fab');
    //     })
    // });

});