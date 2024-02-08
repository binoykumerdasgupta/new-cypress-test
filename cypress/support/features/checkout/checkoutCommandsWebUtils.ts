/// <reference types="cypress" />

import { testUser } from '../../user_credentials';
import { constants } from './checkoutConstants';

const { defaultCopy } = constants;

// selectors strategy

export const selectors = {
    getLoginName: () => cy.get(defaultCopy.loginName),
    getPassword: () => cy.get(defaultCopy.password),
    getLoginButton: () => cy.get(defaultCopy.loginButton),
};

// Assertion 

export const assert = {
    LoginNameShown: () => selectors.getLoginName().should('be.visible'),
    PasswordShown: () => selectors.getPassword().should('be.visible'),
    LoginButtonShown: () => selectors.getLoginButton().should('be.visible'),
    WelcomeTextShown: () => cy.contains('Welcome back Binoy'),
};

// Actions 

export const action = {
    typeLogName: () => {
        selectors.getLoginName().type(testUser.USER_NAME);
    },

    typePassword: () => {
        selectors.getPassword().type(testUser.PASSWORD);
    },

    clickLoginButton: () => {
        selectors.getLoginButton().click();
    },
};