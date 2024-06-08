declare namespace Cypress {
    interface Chainable {
        footer_link(label: string, selector: string, text: string): Chainable<void>;
        contact_Us_Form(
            firstName: string,
            email: string,
            enquiry: string
        ): Chainable<void>;
        login_form(username: string, password: string): Chainable<void>;
        select_product(productName: string): Chainable<void>;
        multiple_products(productName: string): Chainable<void>;
        checkout(quantity: string): Chainable<void>;
        mock_articles(email: string, password: string): Chainable<void>;
        mock_tags(email: string, password: string): Chainable<void>;
        sign_up(username: string, email: string, password: string): Chainable<void>;
        sign_in(email: string, password: string): Chainable<void>;

        setLocalStorage(key: string, value: string): Chainable<void>;
        getLocalStorage(key: string): Chainable<void>;
        // The Fibre cafe
        checkLinkExists(linkText: string): Chainable<void>;
        verifyThePageTitle(linkText: string, expectedUrl: string, expectedTitle: string): Chainable<void>;

    }
}
