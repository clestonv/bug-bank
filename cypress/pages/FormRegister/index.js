const criarPessoa = require('../../support/utils');
import { elements as el } from './elements';

class FormRegister {
    visitarFormRegister() {
        // cy.viewport(412, 915)
        cy.visit('https://bugbank.netlify.app/')
        cy.get('.ihdmxA').click()
    }

    PreencherFormularioCadastro() {
            //Action
    const person = criarPessoa();
    cy.get(el.email, {timeout: 6000 }).type(person.email,{force: true});
    cy.get(el.nome).type(person.nome,{force: true})
    cy.get(el.senha).type(person.password,{force: true})
    cy.get(el.confirmaSenha).type(person.password,{force: true})
    cy.get(el.submit).click({force: true})
    }

    validarCadastroComSucesso() {
        cy.get(el.modal).should('be.visible')
    }
}

export default new FormRegister