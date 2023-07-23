/// <reference types="cypress"/>

describe('Tela Login Sauce Demo', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com');

    });
    afterEach(() => {
        //cy.screenshot()

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
        it(`CT00${cont} - Validar logon bem sucedido com o username -> "${user}"`, () => {
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

    it('CT005 - Validar mensagem de erro para usuario bloqueado', () => {
        cy.get('#user-name').type('locked_out_user');
        cy.get('#password').type('secret_sauce');

        // Enviar formulário de login
        cy.get('.btn_action').click();
        cy.get('.error-message-container > h3')
            .should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    });

    it('CT006 - Validar mensagem para usuario inexistente', () => {
        cy.get('#user-name').type('usuario-desconhecido');
        cy.get('#password').type('secret_sauce');

        // Enviar formulário de login
        cy.get('.btn_action').click()
        cy.get('[data-test="error"]')
            .should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    });

});


