/// <reference types="cypress" />
import FormRegister from '../pages/FormRegister';

describe('Formulario de Cadastro', () => {

  beforeEach(() => {
    FormRegister.visitarFormRegister();
  });
  it.only('Envio com sucesso', () => {
    FormRegister.PreencherFormularioCadastro();
    //Assert
    FormRegister.validarCadastroComSucesso();
  })

})