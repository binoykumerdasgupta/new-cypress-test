declare namespace Cypress {
    interface Chainable<Subject = any> {
        findByLabelText(labelText: string, options?: Partial<Loggable & Timeoutable>): Chainable<Subject>;

        findByPlaceholderText(placeholderText: string, options?: Partial<Loggable & Timeoutable>): Chainable<Subject>;

        findByRole(
            role: string,
            options?: Partial<Loggable & Timeoutable> & {
                name?: string | RegExp,
                includeShadowDom?: boolean,
            }
        ): Chainable<Subject>;

    }
}