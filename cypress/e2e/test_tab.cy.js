/// <reference types='cypress'/>

describe('', () => {
    beforeEach(() => {
        cy.visit('http://the-internet.herokuapp.com/')
    });
    it('Verificar validação entre mudança de guias', () => {
        cy.get(':nth-child(33) > a').click()
        cy.get('.example > a').invoke('removeAttr', 'target').click()
        cy.url()
            .should('include', '/windows/new')
        cy.get('h3')
            .should('have.text', 'New Window')

        // cy.get('.home-wrapper h1').should('have.text','Make sure your code lands')
    });
});