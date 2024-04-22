import { homepage } from '../support/pages/HomePage';
import * as Caplin from '../support/features/caplin/contactUsWebUtils';
import { HowDidYouHearAboutUs } from '../support/features/caplin/types';

describe('Contact us form feature:', () => {
  beforeEach(() => {
    homepage.visitCaplinContactUs();
    Caplin.assertion.titleShown();
  });

  it('User should be able to submit contact us', () => {
    Caplin.assertion.contactUsFormHeaderDescriptionShown();

    Caplin.actions.typeName();
    Caplin.actions.typeEmail();
    Caplin.actions.typeTelephone();
    Caplin.actions.typeCompnay();
    Caplin.actions.typeJobTitle();
    Caplin.actions.selectHowDidYouHearAboutUsOption(
      HowDidYouHearAboutUs.LINKEDIN
    );
    Caplin.actions.typeMessage();

    Caplin.assertion.getBackToMeButtonShown();
  });
});
