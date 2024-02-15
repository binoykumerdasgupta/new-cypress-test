/// <reference types="Cypress" />

import { homepage } from "../support/pages/HomePage";
import * as Checkout from '../support/features/checkout/checkoutCommandsWebUtils';
import { testUser } from "../support/user_credentials";

describe('Log in', () => {
    beforeEach(() => {
        homepage.visitLoginPage();
    });

    it('Adding a product to the cart and checkout', () => {
        cy.login_form(testUser.USER_NAME, testUser.PASSWORD);
        cy.wait(5000);
        cy.get('#customer_menu_top').should('exist');

        cy.get('a[href*="product/category&path="]').contains('Fragrance').click();
        cy.select_product('Gucci Guilty');
        cy.get('.bgnone').should('exist');
        // Gucci Guilty
        // ck one shock for him Deodorant
        cy.checkout('2');
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

