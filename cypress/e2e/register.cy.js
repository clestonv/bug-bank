/// <reference types="cypress" />

const criarPessoa = require('../support/utils');

describe('Formulario de Cadastro', () => {

  beforeEach(() => {
    cy.visit('https://bugbank.netlify.app/')
    cy.get('.ihdmxA').click()
  });
  it('Envio com sucesso', () => {
    const pessoa = criarPessoa();
    const nome = pessoa.nome
    const email = pessoa.email
    cy.registroComSucesso(nome, email, pessoa.password);
    cy.get('#modalText').should('be.visible')
  })

  it('Obrigatorio nome', () => {

    // Exibe mensagem de erro informando que o campo Nome é obrigatório
    cy.get(".card__register input[placeholder='Informe seu e-mail']").type('email@gmail.com',{force: true})
    cy.get(".card__register input[placeholder='Informe sua senha']").type('email@gmail.com',{force: true})
    cy.get(".card__register input[placeholder='Informe a confirmação da senha']").type('email@gmail.com',{force: true})
    cy.get(".card__register button[type='submit']").click({force: true})
    cy.get('#modalText').should('be.contain','Nome não pode ser vazio.')
  })

  it('Obrigatorio email', () => {

    // Exibe mensagem de erro informando que o campo Email é obrigatório
    cy.get(".card__register input[placeholder='Informe seu Nome']").type('email@gmail.com',{force: true})
    cy.get(".card__register input[placeholder='Informe sua senha']").type('email@gmail.com',{force: true})
    cy.get(".card__register input[placeholder='Informe a confirmação da senha']").type('email@gmail.com',{force: true})
    cy.get(".card__register button[type='submit']").click({force: true})
    cy.get('.kOeYBn p').should('be.contain','É campo obrigatório')
  })

  it('Obrigatorio senha', () => {

    // Exibe mensagem de erro informando que o campo Senha é obrigatório
    cy.get(".card__register input[placeholder='Informe seu e-mail']").type('email@gmail.com',{force: true})
    cy.get(".card__register input[placeholder='Informe seu Nome']").type('email@gmail.com',{force: true})
    cy.get(".card__register input[placeholder='Informe a confirmação da senha']").type('email@gmail.com',{force: true})
    cy.get(".card__register button[type='submit']").click({force: true})
    cy.get('.kOeYBn p').should('be.contain','É campo obrigatório')
  })
  it('Obrigatorio Campo Confirma senha', () => {

    // Exibe mensagem de erro informando que o campo Senha é obrigatório
    cy.get(".card__register input[placeholder='Informe seu e-mail']").type('email@gmail.com',{force: true})
    cy.get(".card__register input[placeholder='Informe seu Nome']").type('email@gmail.com',{force: true})
    cy.get(".card__register input[placeholder='Informe sua senha']").type('email@gmail.com',{force: true})
    // cy.get(".card__register input[placeholder='Informe a confirmação da senha']").type('email@gmail.com',{force: true})
    cy.get(".card__register button[type='submit']").click({force: true})
    cy.get('.kOeYBn p').should('be.contain','É campo obrigatório')
  })

  it('Criar conta sem saldo deve criar conta com saldo de R$ 0,00', () => {
    const pessoa = criarPessoa();
    const nome = pessoa.nome
    const email = pessoa.email
    const senha = pessoa.password;

    cy.registroComSucesso(nome, email, senha);
    cy.get('#modalText').should('be.visible')
    cy.get('#btnCloseModal').click();
    
    cy.get('input[name="email"]').eq(0).type(email,{force: true});
    cy.get('input[name="password"]').eq(0).type(senha,{force: true});    
    
    cy.get('.login__buttons button[type=submit]').click();

    cy.get('#textBalance span').should('be.visible').contains('0,00')

  })
  it('Criar conta com saldo deve criar conta com saldo de R$ 1.000,00', () => {
    const pessoa = criarPessoa();
    const nome = pessoa.nome
    const email = pessoa.email
    const senha = pessoa.password;
    //Cadastro
    cy.registroComSucessoComSaldo(nome, email, senha);
    //Validar mensagem do Modal
    cy.get('#modalText').should('be.visible')
    //Eu fecho o modal
    cy.get('#btnCloseModal').click();
    
    // Realizo o Login
    cy.get('input[name="email"]').eq(0).type(email,{force: true});
    cy.get('input[name="password"]').eq(0).type(senha,{force: true});    

    
    
    cy.get('.login__buttons button[type=submit]').click();

    cy.get('#textBalance span').should('be.visible').contains('1.000,00')

  })
})