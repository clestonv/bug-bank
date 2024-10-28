# Test Matrix para Requisito A

| Entrada | Ação esperada | Resultado esperado |
|---|---|---|
| **Nome preenchido, Email preenchido, Senha preenchida e Confirmação de senha preenchida** | **Enviar formulário** | **Formulário enviado com sucesso** |
| **Nome não preenchido, Email preenchido, Senha preenchida e Confirmação de senha preenchida** | **Enviar formulário** | **Exibe mensagem de erro informando que o campo Nome é obrigatório** |
| **Nome preenchido, Email não preenchido, Senha preenchida e Confirmação de senha preenchida** | **Enviar formulário** | **Exibe mensagem de erro informando que o campo Email é obrigatório** |
| **Nome preenchido, Email preenchido, Senha não preenchida e Confirmação de senha preenchida** | **Enviar formulário** | **Exibe mensagem de erro informando que o campo Senha é obrigatório** |
| **Nome preenchido, Email preenchido, Senha preenchida, Confirmação de senha não preenchida** | **Enviar formulário** | **Exibe mensagem de erro informando que o campo Confirmação de senha é obrigatório** |
| **Nome preenchido, Email preenchido, Senha preenchida, Confirmação de senha preenchida incorretamente** | **Enviar formulário** | **Exibe mensagem de erro informando que as senhas não conferem** |

## Outros cenários a serem considerados

* Campos preenchidos com caracteres inválidos
* Campos preenchidos com valores muito longos ou muito curtos
* Campos preenchidos com valores repetidos

## Análise dos resultados

Os resultados dos testes devem indicar que o sistema atende ao requisito A, ou seja, que os campos Nome, Email, Senha e Confirmação de senha são de preenchimento obrigatório. Se algum dos testes falhar, o sistema deverá ser corrigido para atender ao requisito.

## Observações

* Os testes devem ser realizados em todos os ambientes (desenvolvimento, teste e produção).
* Os testes devem ser realizados por usuários reais, se possível.
* Os resultados dos testes devem ser documentados e armazenados.

## Recomendações

* Os testes podem ser automatizados para reduzir o tempo e o custo de execução.
* Os resultados dos testes podem ser integrados a um sistema de gerenciamento de testes para facilitar a rastreabilidade e o gerenciamento.
