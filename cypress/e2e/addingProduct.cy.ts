/// <reference types="Cypress" />
import { homepage } from "../support/pages/HomePage";

describe('Product', () => {
    beforeEach(() => {
        homepage.visitHomePage();
        cy.get('a[href*="product/category&path="]').contains('Fragrance').click()
        // cy.visit('https://automationteststore.com/index.php?rt=product/category&path=49');
    });

    it('Select a product from fragrance', () => {
        cy.get('a[href*="product/category&path="]').contains('Fragrance').click()
        cy.select_product('Gucci Guilty');
        cy.get('.bgnone').should('exist');
    });

    it('Select a product from haircare', () => {
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click()
        cy.select_product('Pantene Pro-V Conditioner, Classic Care');
        cy.get('.bgnone').should('exist');
    });
    

});