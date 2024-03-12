/// <reference types="Cypress" />

import { homepage } from "../support/pages/HomePage";
import * as Checkout from '../support/features/checkout/checkoutCommandsWebUtils';
import { testUser } from "../support/user_credentials";

describe('Log in', () => {
    beforeEach(() => {
        homepage.visitLoginPage();
    });

    it.only('Adding a product to the cart and checkout', () => {
        cy.login_form(testUser.USER_NAME, testUser.PASSWORD);
        cy.wait(2000);
        // cy.get('#customer_menu_top').should('exist');
        Checkout.assert.CustomerMenuTopShown();
        // cy.get('a[href*="product/category&path="]').contains('Fragrance').click();
        Checkout.action.clickFragranceProductCategory('Fragrance');
        // cy.select_product('Gucci Guilty');
        Checkout.action.selectaProduct('Gucci Guilty')
        // cy.checkout('2');
        Checkout.action.checkout('2');
        Checkout.assert.CheckoutConfirmation();

    });

    it('should be able to login', () => {
        Checkout.assert.LoginButtonShown();
        Checkout.assert.LoginNameShown();
        Checkout.assert.PasswordShown();

        Checkout.action.typeLogName();
        Checkout.action.typePassword();
        Checkout.action.clickLoginButton();

        Checkout.assert.WelcomeTextShown();
    });

});

