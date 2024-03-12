export type Constants = {
  defaultCopy: {
    name: string;
    email: string;
    companyName: string;
    message: string;
    howHearAboutDropdown: string;
    contactUsPage: string;
    areaOfInterestCheckBox: string;
    agreeTandCs: string;
    submitForm: string;
  };
};

export const constants: Constants = {
  defaultCopy: {
    name: '#field_zgm9b',
    email: '#field_ux4df',
    companyName: '#field_q685e',
    message: '#field_zmh9f',
    howHearAboutDropdown: '#field_1q0ww',
    contactUsPage: 'CONTACT US',
    areaOfInterestCheckBox: 'input[name="item_meta[11][]"]',
    agreeTandCs: 'input[id="field_41sng-0"]',
    submitForm: '.frm_final_submit',
  },
};
