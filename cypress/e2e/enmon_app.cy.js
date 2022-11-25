describe('Enmon App', () => {
  it('logs in Enmon app', () => {
    cy.visit('https://pasport.dev.enmon.tech/')
      cy.get("#authForm_locationApiKey").type("f75cb865ded1c60e{enter}")
  })
})