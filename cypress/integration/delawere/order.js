describe ('Тестируем оформление заказа', function() {
    
    it('Позитивный тест на добавление товара в корзину и оформление заказа', function () {
        cy.visit('https://testqastudio.me/');
        cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg > path').click().click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('.cart-panel-content > .modal-header > .close-account-panel > .razzi-svg-icon > svg > [x1="6"]').click();
        cy.get('#menu-top > .menu-item-home > a').click();
        cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.wait(5500);
        cy.get('.checkout').click();
        cy.get('#billing_first_name').type('Ignat');
        cy.get('#billing_last_name').type('Pustovalov');
        cy.get('#billing_address_1').type('ул. Пушкинская, 61, кв. 12');
        cy.get('#billing_city').type('Ростов-на-Дону');
        cy.get('#billing_state').type('Ростовская область');
        cy.get('#billing_postcode').type('346400');
        cy.get('#billing_phone').type('89613210000');
        cy.get('#billing_email').type('123@mail.ru');
        cy.get('#place_order').click();
        cy.contains('Ваш заказ принят. Благодарим вас.')
    })
})