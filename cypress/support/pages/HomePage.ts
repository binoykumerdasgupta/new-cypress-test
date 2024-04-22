class HomePage {
    visitHomePage() {
        cy.visit(Cypress.env('homePage'));
    }
    visitContactUsPage() {
        cy.visit(Cypress.env('contactUs'));
    }
    visitLoginPage() {
        cy.visit(Cypress.env('loginPage'));
    }
    visitConduitHomePage() {
        cy.visit(Cypress.env('conduitHomePage'));
    }

    visitReqResPage() {
        cy.visit(Cypress.env('reqresPage'));
    }

    visitBrady() {
        cy.visit(Cypress.env('brady'));
    }

    visitUnify() {
        cy.visit(Cypress.env('unify'))
    }

    visitCaplinContactUs() {
        cy.visit(Cypress.env('caplin'))
    }

}
export const homepage = new HomePage();