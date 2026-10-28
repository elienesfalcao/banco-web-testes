describe('Login', () => {
  it('Login com dados validos deve permitir entrada no sisitema', () => {
    cy.visit('http://localhost:4000')
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.contains('button', 'Entrar').click()

    //Asserções é verificar se um título está na tela
    //cy.contains ('h4', 'Realizar transferência').should('to.visible')
  })
})

  it('Login com dados invalidos deve apresentar mensagem de erro', () => {
    cy.visit('http://localhost:4000')
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123')
    cy.contains('button', 'Entrar').click()

    //Asserções é verificar se um título está na tela
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.' )

  })

