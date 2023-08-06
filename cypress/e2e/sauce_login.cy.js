/// <reference types="cypress"/>

import locators from "../support/locators";

describe('Tela Login Sauce Demo', () => {
    it('CT001 - Validar logon com sucesso', () => {

        cy.login('standard_user', 'secret_sauce')
        cy.url().should('include', '/inventory.html');
        cy.get(locators.page_produto.TITLE_PRODUTO).should('contain', 'Products')
    });

    const usernames = ['standard_user', 'problem_user', 'performance_glitch_user']
    let cont = 2

    usernames.forEach(user => {
        it(`CT00${cont} - Validar logon bem sucedido com o username -> "${user}"`, () => {
            cy.login(user, 'secret_sauce')
            cy.url().should('include', '/inventory.html');
            cy.get(locators.page_produto.TITLE_PRODUTO).should('contain', 'Products')
        });
        cont++
    })

    it('CT005 - Validar mensagem de erro para usuario bloqueado', () => {
        cy.login('locked_out_user', 'secret_sauce',)
        cy.get(locators.page_login.ERROR_USER_BLOCK)
            .should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    });

    it('CT006 - Validar mensagem para usuario inexistente', () => {

        cy.login('usuario-desconhecido','secret_sauce')
        cy.get(locators.page_login.ERROR_USER_NONEXISTENT)
            .should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    });

});


