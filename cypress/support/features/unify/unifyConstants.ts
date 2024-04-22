export type Constants = {
  defaultCopy: {
    acceptCookies: string;
    openMenu: string;
    aboutUs: string;
    contactUslink: string;
    contactUsHeader: string;
    firstName: string;
    lastName: string;
    email: string;
    iLiveIn: string;
    phone: string;
    company: string;
    countrySelectOption: string;
    areaOfInterest: string;
    comment: string;
    checkInfo: string;
    checkInfoLabelText: string;
  };
};

export const constants: Constants = {
  defaultCopy: {
    acceptCookies: '#onetrust-accept-btn-handler',
    openMenu: '#site-nav-toggle-btn',
    aboutUs: 'button[data-elabel="About Us"]',
    contactUslink: 'Contact Us',
    contactUsHeader: '[class="mb-5"]',
    firstName: '#FirstName',
    lastName: '#LastName',
    email: '#Email',
    iLiveIn: '#CountrySelectBoxIt',
    phone: '#Phone',
    company: '#Company',
    countrySelectOption: '#CountrySelectBoxItOptions li[data-val]',
    areaOfInterest: '#formContactUsAreaofInterestmktoSelectBoxIt',
    comment: '#commentCapturemkto',
    checkInfo: 'input[name="subscriptionConsentGivenWebFormmkto"]',
    checkInfoLabelText: 'label[for="mktoCheckbox_202124_0"]',
  },
};
