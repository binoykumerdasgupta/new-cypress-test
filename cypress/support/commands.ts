/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
Cypress.Commands.add('footer_link', (label: string, selector: string, text: string) => {
    cy.get('a[href*="content_id"]').contains(label).click();
    cy.get(selector).should('exist').contains(text);
});

Cypress.Commands.add('contact_Us_Form', (firstName: string, email: string, enquiry: string) => {
    cy.get('.form_description').should('exist').contains('Contact Us Form');
    cy.get('#ContactUsFrm_first_name').as('firstName')
    cy.get('@firstName').should('have.attr', 'name', 'first_name');
    cy.get('@firstName').clear().type(firstName).should('have.value', firstName);
    // ContactUsFrm_email
    cy.get('#ContactUsFrm_email').as('email')
    cy.get('@email').should('have.attr', 'name', 'email');
    cy.get('@email').clear().type(email).should('have.value', email);
    // ContactUsFrm_enquiry
    cy.get('#ContactUsFrm_enquiry').as('enquiry')
    cy.get('@enquiry').should('have.attr', 'name', 'enquiry');
    cy.get('@enquiry').clear().type(enquiry).should('have.value', enquiry);
    // submitting the form 
    cy.get('[title="Submit"]').click();
    cy.title().should('include', 'Contact Us');
    cy.get('.maintext').should('exist').contains('Contact Us');
})

Cypress.Commands.add('login_form', (username: string, passowrd: string) => {
    cy.get('#loginFrm_loginname').as('username');
    cy.get('@username').clear().type(username);
    cy.get('#loginFrm_password').as('password');
    cy.get('@password').clear().type(passowrd)
    cy.get('[title="Login"]').click();
})

Cypress.Commands.add('select_product', (productName: string) => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        if ($el.text() === productName) {
            cy.wrap($el).click();
        }
    })
})

Cypress.Commands.add('multiple_products', (productName: string) => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        if ($el.text() === productName) {
            cy.get('.productcart').eq(index).click();
        }
    })
})

Cypress.Commands.add('checkout', (quantity: string) => {
    cy.get('#product_quantity').as('quantity');
    cy.get('@quantity').click();
    cy.get('@quantity').clear().type(quantity);
    cy.get('.cart').click();
    cy.get('#cart_checkout2').should('exist').and('contain', 'Checkout').click();
    cy.get('.maintext').should('exist').and('contain', ' Checkout Confirmation');
})

Cypress.Commands.add('sign_up', (username: string, email: string, password: string) => {
    cy.intercept('POST', '**/*.realworld.io/api/users').as('createuser'); // Alias
    cy.contains('Sign up').click();
    cy.findByPlaceholderText('Username').type(username);
    cy.findByPlaceholderText('Email').type(email)
    cy.findByPlaceholderText('Password').type(password);
    cy.findByRole('button', {name: 'Sign up'}).click();
})

Cypress.Commands.add('sign_in', (email: string, password: string) => {
    cy.contains('Sign in').click();
    cy.findByPlaceholderText('Email').type(email)
    cy.findByPlaceholderText('Password').type(password);
    cy.findByRole('button', {name: 'Sign in'}).click();
})

Cypress.Commands.add('mock_articles', (email: string, password: string ) => {
    cy.intercept('GET', '**/articles/feed*', { fixture: 'articles.json' }).as('articles');
    cy.contains('Sign in').click();
    cy.findByPlaceholderText('Email').type(email)
    cy.findByPlaceholderText('Password').type(password);
    cy.findByRole('button', {name: 'Sign in'}).click();
})

Cypress.Commands.add('mock_tags', (email: string, password: string ) => {
    cy.intercept('GET', '**/tags', { fixture: 'popularTags.json' }).as('tags');
    cy.contains('Sign in').click();
    cy.findByPlaceholderText('Email').type(email)
    cy.findByPlaceholderText('Password').type(password);
    cy.findByRole('button', {name: 'Sign in'}).click();
})

// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }