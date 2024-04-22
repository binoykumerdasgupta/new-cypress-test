/// <reference types="Cypress" />
import { homepage } from '../support/pages/HomePage';
import * as Unify from '../support/features/unify/unifyCommandsWebUtils';
import { AreaOfInterest } from '../support/features/unify/types';

describe('Contact Us form feature', () => {
  beforeEach(() => {
    homepage.visitUnify();
    Unify.action.clickAcceptTheCookies();
  });

  it('user should be able to submit contact us form', () => {
    Unify.action.clickOpenMenu();
    Unify.action.clickAboutUs();
    Unify.action.clickContactUsLink();

    Unify.assert.ContactUsHeaderShown();

    Unify.action.typeBasicInfo();
    Unify.action.selectLiveIn();
    Unify.action.selectAreaOfInterestOption(AreaOfInterest.AEROSPACE);
    Unify.action.typeComment();

    Unify.action.checkCheckboxAndVerifyLabel();
    Unify.assert.VerifyLabelTextShown();
  });

});