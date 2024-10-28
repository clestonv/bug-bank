describe('Formulario de Login', () => {

    beforeEach(() => {
      cy.visit('https://bugbank.netlify.app/')
    });
    it('O login deve ser a primeira tela', () => {
      cy.get('.card__login')
          .should('be.visible');            
    });
    it('Deve conter um campo input E-mail', () => {
        cy.get(' .card__login input[placeholder="Informe seu e-mail"]')
            .should('be.visible');            
    });
    it('Deve conter um campo input Senha', () => { 
      cy.get(' .card__login input[placeholder="Informe sua senha"]')
          .should('be.visible');       
    });
    it('Deve conter um botão Acessar', () => {
      cy.get('button[type="submit"]')
          .contains('Acessar')
          .should('be.visible');       
    });

    it('O campo e-mail é obrigatório', () => {
      cy.get(' .card__login input[placeholder="Informe sua senha"]')
        .type('123454678')
      cy.get('button[type="submit"]')
        .contains('Acessar')
        .click()
      cy.get('.card__login input[type="email"] + p')
          .contains('É campo obrigatório')
          .should('be.visible');       
    });

    it('O campo senha é obrigatório', () => {
      cy.get(' .card__login input[placeholder="Informe seu e-mail"]')
        .type('email@email.com')
      cy.get('button[type="submit"]')
        .contains('Acessar')
        .click()
      cy.get('.card__login input[type="password"] + p')
          .contains('É campo obrigatório')
          .should('be.visible');       
    });

    it('Clicar no  botão [Registar] apresenta a tela [Cadastro]', () => {
      cy.get('button[type="button"]')
        .contains('Registrar')
        .click()
      cy.get('.card__register')
          .should('be.visible');       
    });

    it('Credenciais invalidas', () => {
      cy.get('.card__login [placeholder="Informe seu e-mail"]')
        .type('emai2l@email.com');
      cy.get('.card__login [placeholder="Informe sua senha"]')
        .type('123456');

        cy.get('button[type="submit"]')
        .contains('Acessar')
        .click();

      cy.get('#modalText')
          .should('be.visible');       
    });
//## Botão [Entrar]:
// O botão [Entrar] deve estar no estado de habilitador.
// Ao clicar no botão [Entra]:
// Se o e-mail e senha forem válidos, ao clicar no botão [Entrar], então o usuário deve ser redirecionado para a [Tela Home] do sistema.
// Se o e-mail for válido e a senha inválido, deve ser apresentada a mensagem “E-mail e/ou senha são inválidos”.
// Se o e-mail for invalido e a senha valida, deve ser apresentada a mensagem “E-mail e/ou senha são inválidos.
// Se ao clicar no botão [Entrar] um ou mais campos estiverem em branco, deve ser apresentada a mensagem “O campo [nome campo] é obrigatório.

  })