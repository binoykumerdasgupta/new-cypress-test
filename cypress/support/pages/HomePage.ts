class HomePage { 
    visitHomePage ( ) {
        cy.visit(Cypress.env('homePage'));
    }
    visitContactUsPage () {
        cy.visit(Cypress.env('contactUs'));
    }
    visitLoginPage () {
        cy.visit(Cypress.env('loginPage'));
    }
    visitConduitHomePage () {
        cy.visit(Cypress.env('conduitHomePage'));
    }

    visitReqResPage () {
        cy.visit(Cypress.env('reqresPage'));
    }

}
export const homepage = new HomePage();