/// <reference types="Cypress" />
import { homepage } from "../../support/pages/HomePage";

describe('Contact us', () => {
    beforeEach(() => {
        homepage.visitContactUsPage()
    });

    it('Fill the contact us page providing valid data', () => {
        cy.contact_Us_Form('Hello123', 'hello@io.com',
            'some text and next line text \n next line text appeared');
    });

});