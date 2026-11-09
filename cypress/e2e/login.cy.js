
describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4000')
  })

 it('Login com dados válidos deve permitir entrada no sistema', () => {
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').type(credenciais.valida.usuario)
      cy.get('#senha').type(credenciais.valida.senha)
    })
    cy.contains('button', 'Entrar').click()

    // Validar o resultado esperado do login válido
    // Exemplo:
    // cy.contains('h4', 'Realizar transferência').should('be.visible')
  })

  it('Login com dados inválidos deve apresentar mensagem de erro', () => {
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').type('credenciais.invalida.usuario')
      cy.get('#senha').type('credenciais.invalida.senha')
    cy.contains('button', 'Entrar').click()

    })

    cy.get('.toast')
      .should('be.visible')
      .and('have.text', 'Erro no login. Tente novamente.')
  })
})

