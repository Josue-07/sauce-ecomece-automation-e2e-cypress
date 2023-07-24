/// <reference types="cypress"/>

import locators from "../support/locators";

describe('Tela Login Sauce Demo', () => {
    afterEach(() => {
        //cy.screenshot()

    });

    it.only('CT001 - Validar logon com sucesso', () => {

        // Preencher campos de login
        cy.get(locators.page_login.USER).type('standard_user');
        cy.get(locators.page_login.PASSWORD).type('secret_sauce');

        // Enviar formulário de login
        cy.get(locators.page_login.BTT_LOGIN).click();

        // Verificar se o logon foi realizado com sucesso
        cy.url().should('include', '/inventory.html');
        cy.get(locators.page_produto.TITLE_PRODUTO).should('contain', 'Products');
    });

    const usernames = ['standard_user', 'problem_user', 'performance_glitch_user']
    let cont = 2
    usernames.forEach(user => {
        it(`CT00${cont} - Validar logon bem sucedido com o username -> "${user}"`, () => {
            cy.get(locators.page_login.USER).type(`${user}`);
            cy.get(locators.page_login.PASSWORD).type('secret_sauce');

            // Enviar formulário de login
            cy.get(locators.page_login.BTT_LOGIN).click();

            // Verificar se o logon foi realizado com sucesso
            cy.url().should('include', '/inventory.html');
            cy.get(locators.page_produto.TITLE_PRODUTO).should('contain', 'Products');
        });
        cont++

    })

    it('CT005 - Validar mensagem de erro para usuario bloqueado', () => {
        cy.get(locators.page_login.USER).type('locked_out_user');
        cy.get(locators.page_login.PASSWORD).type('secret_sauce');

        // Enviar formulário de login
        cy.get(locators.page_login.BTT_LOGIN).click();
        cy.get(locators.page_login.ERROR_USER_BLOCK)
            .should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    });

    it('CT006 - Validar mensagem para usuario inexistente', () => {
        cy.get(locators.page_login.USER).type('usuario-desconhecido');
        cy.get(locators.page_login.PASSWORD).type('secret_sauce');

        // Enviar formulário de login
        cy.get(locators.page_login.BTT_LOGIN).click()
        cy.get(locators.page_login.ERROR_USER_NONEXISTENT)
            .should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    });

});


