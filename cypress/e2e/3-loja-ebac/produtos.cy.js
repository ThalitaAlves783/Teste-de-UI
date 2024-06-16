/// <reference types="cypress"/>


describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });
    
    it('Deve selecionar os produtos de uma lista', () => {
        
        cy.get('.products > .row')
        .contains('Aero Daily Fitness Tee')
        .click()

        cy.get('#tab-title-description > a').should('contain','Descrição')
    });
});