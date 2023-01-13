describe('Тестируем форму логина', function () {

    it('Позитивный тест на верный логин и пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon');
    })

it('Позитивный тест на восстановление пароля', function () {
    cy.reload();
    cy.visit('https://login.qa.studio/');
    cy.get('#forgotEmailButton').click();
    cy.get('#forgotForm > .header').contains('Восстановите пароль');
    cy.get('#exitRestoreButton > .exitIcon');
    cy.get('#mailForgot').type('qastudio@mail.com');
    cy.get('#restoreEmailButton').click();
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
    cy.get('#exitMessageButton > .exitIcon').click();
    cy.contains('Форма логина');
})
it('Негативный тест на неверный пароль', function () {
    cy.reload();
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('german@dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio123');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon');
})
it('Негативный тест на неверный логин', function () {
    cy.reload();
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('qastudio@mail.com');
    cy.get('#pass').type('iLoveqastudio123');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon');
})
it('Негативный тест на валидацию', function () {
    cy.reload();
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('germandolnikov.ru');
    cy.get('#pass').type('iLoveqastudio123');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
    cy.get('#exitMessageButton > .exitIcon');
})
it('Позитивный тест на приведение к строчным буквам', function () {
    cy.reload();
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('GerMan@Dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio123');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Авторизация прошла успешно');
    cy.get('#exitMessageButton > .exitIcon');
})
})