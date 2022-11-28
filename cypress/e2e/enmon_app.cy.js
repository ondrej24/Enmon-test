describe('Enmon App', () => {
  it('logs in Enmon app', () => {
    cy.visit('https://pasport.dev.enmon.tech/')
      cy.get("#authForm_locationApiKey").type("password{enter}")
  })
})