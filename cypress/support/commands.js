// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('clickLink', (label) => {
    cy.get('a').contains(label).click()
  })

Cypress.Commands.add('registroComSucesso', (nome, email, senha) => {
  cy.get(".card__register input[placeholder='Informe seu e-mail']").type(email,{force: true});
  cy.get(".card__register input[placeholder='Informe seu Nome']").type(nome,{force: true})
  cy.get(".card__register input[placeholder='Informe sua senha']").type(senha,{force: true})
  cy.get(".card__register input[placeholder='Informe a confirmação da senha']").type(senha,{force: true})
  cy.get(".card__register button[type='submit']").click({force: true})
});

Cypress.Commands.add('registroComSucessoComSaldo', (nome, email, senha) => {
  cy.get(".card__register input[placeholder='Informe seu e-mail']").type(email,{force: true});
  cy.get(".card__register input[placeholder='Informe seu Nome']").type(nome,{force: true})
  cy.get(".card__register input[placeholder='Informe sua senha']").type(senha,{force: true})
  cy.get(".card__register input[placeholder='Informe a confirmação da senha']").type(senha,{force: true})
  cy.get('#toggleAddBalance').click({force: true});
  cy.get(".card__register button[type='submit']").click({force: true})
});