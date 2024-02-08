/// <reference types="cypress" />
import { constants } from './conduitConstants';
import { userInfo } from '../../user_credentials';

const { defaultCopy } = constants;

// selectors strategy

export const selectors = {
    getUserName: () => cy.get(defaultCopy.userName),
    getEmail: () => cy.get(defaultCopy.email),
    getPassword: () => cy.get(defaultCopy.password),
    getSignUpButton: () => cy.get(defaultCopy.signUpButton),
    getSignInButton: () => cy.get(defaultCopy.signInButton),
};

// Assertion 

export const assert = {
    UserNameShown: () => selectors.getUserName().should('be.visible'),
    EmailShown: () => selectors.getEmail().should('be.visible'),
    PasswordShown: () => selectors.getPassword().should('be.visible'),
    SignUpButtonShown: () => selectors.getSignUpButton().should('be.visible'),
    SignInButtonShown: () => selectors.getSignInButton().should('be.visible'),
    UserNameShownInHomePage: () => cy.get(':nth-child(4) > .nav-link').should('contain', userInfo.USER_NAME),
};

// Actions 

export const action = {
    clickSignUpLink: () => {
        cy.contains('Sign up').click();
    },

    clickSignInLink: () => {
        cy.contains('Sign in').click();
    },

    typeUserName: () => {
        selectors.getUserName().type(userInfo.USER_NAME);
    },

    typeEmail: () => {
        selectors.getEmail().type(userInfo.EMAIL);
    },

    typePassword: () => {
        selectors.getPassword().type(userInfo.PASSWORD);
    },

    clickSignUpButton: () => {
        selectors.getSignUpButton().click();
    },

    clickSignInButton: () => {
        selectors.getSignInButton().click();
    },
};