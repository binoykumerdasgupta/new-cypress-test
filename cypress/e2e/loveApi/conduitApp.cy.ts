/// <reference types="cypress" />
import { expect } from "chai";
import { homepage } from "../../support/pages/HomePage";
import * as Conduit from '../../support/features/conduitApp/conduitCommandsWebUtils';
import { userInfo } from '../../support/user_credentials';

describe('template spec', () => {
    // An application under test ( AUT )
    beforeEach(() => {
        homepage.visitConduitHomePage();
    });

    it('should be able to register a user and able to login', () => {
        cy.intercept('POST', '**/*.realworld.io/api/users').as('createUser');
        Conduit.action.clickSignUpLink();
        Conduit.assert.SignUpButtonShown();

        Conduit.action.typeUserName();
        Conduit.action.typeEmail();
        Conduit.action.typePassword();
        Conduit.action.clickSignUpButton();

        cy.wait('@createUser', { timeout: 5000 }).then(({ request, response }) => {
            expect(response?.statusCode).to.eq(201);
            expect(request?.body.user.username).to.eq(userInfo.USER_NAME);
            expect(request?.body.user.email).to.eq(userInfo.EMAIL);
        });
    });

    it('should be able to login with a valid credentials', () => {
        Conduit.action.clickSignInLink();
        Conduit.assert.SignInButtonShown();
        Conduit.action.loginEmail();
        Conduit.action.loginPassword();
        Conduit.action.clickSignInButton();
        Conduit.assert.UserNameShownInHomePageForLoggedInUser();
    });

    // // Mocking data !! 
    it('Mocking popular tags', () => {
        cy.intercept('GET', '**/tags', { fixture: 'popularTags.json' }).as('tags');

        Conduit.action.clickSignInLink();
        Conduit.assert.SignInButtonShown();
        Conduit.action.loginEmail();
        Conduit.action.loginPassword();
        Conduit.action.clickSignInButton();

        cy.get('.tag-list').should('contain', 'Binoy')
            .and('contain', 'Cypress')
            .and('contain', 'implementations');
    });

    it('Mocking feed data', () => {
        cy.intercept('GET', '**/articles/feed*', { fixture: 'articles.json' }).as('articles');

        Conduit.action.clickSignInLink();
        Conduit.assert.SignInButtonShown();
        Conduit.action.loginEmail();
        Conduit.action.loginPassword();
        Conduit.action.clickSignInButton();

        cy.wait('@articles').then(({ request, response }) => {
            expect(response?.body.articles[1].title).to.eq('Welcome Binoy fab');
        });
    });

});