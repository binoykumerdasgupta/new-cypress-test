export type Constants = {
    defaultCopy: {
        loginName: string;
        password: string;
        loginButton: string;
        customerMenuTop: string;
        productCategory: string;
        selectaProduct: string;
        productQuantity: string;
        cart: string;
        cartCheckout: string;
        checkoutConfirmation: string;
    };
};

export const constants: Constants = {
    defaultCopy: {
        loginName: '#loginFrm_loginname',
        password: '#loginFrm_password',
        loginButton: 'button[title="Login"]',
        customerMenuTop: '#customer_menu_top',
        productCategory: 'a[href*="product/category&path="]',
        selectaProduct: '.fixed_wrapper .prdocutname',
        productQuantity: '#product_quantity',
        cart: '.cart',
        cartCheckout: '#cart_checkout2',
        checkoutConfirmation: '.maintext',
    },
};
