/// <reference types="cypress" />

import { testUser } from '../../user_credentials';
import { constants } from './checkoutConstants';

const { defaultCopy } = constants;

// selectors strategy

export const selectors = {
    getLoginName: () => cy.get(defaultCopy.loginName),
    getPassword: () => cy.get(defaultCopy.password),
    getLoginButton: () => cy.get(defaultCopy.loginButton),

    getCustomerMenuTop: () => cy.get(defaultCopy.customerMenuTop),
    getProductCategory: () => cy.get(defaultCopy.productCategory),
    getSelectaProduct: () => cy.get(defaultCopy.selectaProduct),

    getProductQuantity: () => cy.get(defaultCopy.productQuantity),
    getCart: () => cy.get(defaultCopy.cart),
    getCartCheckout: () => cy.get(defaultCopy.cartCheckout),
    getCheckoutConfirmation: () => cy.get(defaultCopy.checkoutConfirmation),

};

// Assertion 

export const assert = {
    LoginNameShown: () => selectors.getLoginName().should('be.visible'),
    PasswordShown: () => selectors.getPassword().should('be.visible'),
    LoginButtonShown: () => selectors.getLoginButton().should('be.visible'),
    WelcomeTextShown: () => cy.contains('Welcome back Binoy'),

    CustomerMenuTopShown: () => selectors.getCustomerMenuTop().should('exist'),
    CartCheckoutShown: () => selectors.getCartCheckout().should('exist').and('contain', 'Checkout'),
    CheckoutConfirmation: () => selectors.getCheckoutConfirmation().should('exist').and('contain', 'Checkout Confirmation')

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

    clickFragranceProductCategory: (category: string) => {
        selectors.getProductCategory().contains(category).click();
    },

    selectaProduct: (productName: string) => {
        selectors.getSelectaProduct().each(($el, index, $list) => {
            if ($el.text() === productName) {
                cy.wrap($el).click();
            }
        })
    },

    checkout: (quantity: string) => {
        selectors.getProductQuantity().click();
        selectors.getProductQuantity().clear().type(quantity);
        selectors.getCart().click();
        assert.CartCheckoutShown().click();
    },
}
