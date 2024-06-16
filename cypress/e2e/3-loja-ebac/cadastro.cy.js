/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';

context('Funcionalidade Cadastro', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve completar o cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('325212451')
        cy.get(':nth-child(4) > .button').click()
    });

});

