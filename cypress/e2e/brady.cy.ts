/// <reference types="Cypress" />
import { homepage } from '../support/pages/HomePage';
import * as Brady from '../support/features/brady/bradyContactUsFormWebUtils';
import { AreaOfInterest } from '../support/features/brady/types';

describe('Contact us', () => {
    beforeEach(() => {
        homepage.visitBrady();
        cy.get('#declineButton').click();
        cy.wait(2000);
    });

    it.only('Fill the contact us page providing valid data', () => {
        Brady.action.goToContactUsPage();
        Brady.assert.NameInputShown();
        Brady.assert.EmailInputShown();

        Brady.action.typeName();
        Brady.action.typeEmail();
        Brady.action.typeCompanyName();
        Brady.action.typeMessage();

        Brady.action.selectFromHowDidYouHearAboutUs();
        Brady.action.selectMultipleCheckboxesAreaOfInterest(3);

        Brady.assert.AgreeTandCsShown();
        Brady.action.checkAgreeTandCs();

        Brady.assert.SubmitFormShown();
        // Check one option from "Area of Interest"
        // cy.get(`input[value="${areaOfInterest}"]`).check();

    });
});
