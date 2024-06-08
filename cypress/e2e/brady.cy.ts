/// <reference types="Cypress" />
import { homepage } from '../support/pages/HomePage';
import * as Brady from '../support/features/brady/bradyContactUsFormWebUtils';
import { AreaOfInterest } from '../support/features/brady/types';

describe('Contact us', () => {
    beforeEach(() => {
        homepage.visitBrady();
        Brady.action.acceptTheCookies();
    });

    it.skip('Fill the contact us page providing valid data', () => {
        Brady.action.goToContactUsPage();
        Brady.assert.NameInputShown();
        Brady.assert.EmailInputShown();

        Brady.action.typeName();
        Brady.action.typeEmail();
        Brady.action.typeCompanyName();
        Brady.action.typeMessage();

        Brady.action.selectFromHowDidYouHearAboutUs();
        Brady.action.selectCheckboxesAreaOfInterest(AreaOfInterest.ERTM);

        Brady.assert.AgreeTandCsShown();
        Brady.action.checkAgreeTandCs();

        Brady.assert.SubmitFormShown();
    });
});
