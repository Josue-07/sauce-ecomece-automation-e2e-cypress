/// <reference types="cypress"/>

describe('Tela Login Sauce Demo', () => {
    it('Validar logon com sucesso', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name')
            .type('standard_user')

        cy.get('#password')
            .type('secret_sauce')

        cy.get('#login-button')
            .click()
    });
});
