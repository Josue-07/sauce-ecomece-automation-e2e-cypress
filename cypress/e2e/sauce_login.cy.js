/// <reference types="cypress"/>

describe('Tela Login Sauce Demo', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com');

    });
    afterEach(() => {
        cy.screenshot()
    });

    it('CT001 - Validar logon com sucesso', () => {

        // Preencher campos de login
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');

        // Enviar formulário de login
        cy.get('.btn_action').click();

        // Verificar se o logon foi realizado com sucesso
        cy.url().should('include', '/inventory.html');
        cy.get('.title').should('contain', 'Products');
    });

    const usernames = ['standard_user', 'problem_user', 'performance_glitch_user']
    let cont = 2
    usernames.forEach(user => {
        it(`CT00${cont} Validar logon bem sucedido com o username -> "${user}"`, () => {
            cy.get('#user-name').type(`${user}`);
            cy.get('#password').type('secret_sauce');

            // Enviar formulário de login
            cy.get('.btn_action').click();

            // Verificar se o logon foi realizado com sucesso
            cy.url().should('include', '/inventory.html');
            cy.get('.title').should('contain', 'Products');
        });
        cont++

    })

});


