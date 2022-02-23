/// <reference types="cypress" />

context('Execução dos testes:', () => {
  beforeEach(() => {
    cy.visit('../../index.html')
  })

  it('Fazer a soma com resultado certo', () => {
    cy.get('#num7').click()
    cy.get('#soma').click()
    cy.get('#num5').click()
    cy.get('#resultado').click()
    cy.get('input#tela').should('contain.value',12)
  })

  it('Fazer a soma com resultado errado', () => {
    cy.get('#num8').click()
    cy.get('#soma').click()
    cy.get('#num5').click()
    cy.get('#resultado').click()
    cy.get('input#tela').should('contain.value',12)
  })

  it('Fazer a multiplicação certa', () => {
    cy.get('#num7').click()
    cy.get('#multiplicacao').click()
    cy.get('#num5').click()
    cy.get('#resultado').click()
    cy.get('input#tela').should('contain.value', 35)
  })

  it('Fazer a multiplicação certa', () => {
    cy.get('#num7').click()
    cy.get('#multiplicacao').click()
    cy.get('#num7').click()
    cy.get('#resultado').click()
    cy.get('input#tela').should('contain.value', 49)
  })

})
