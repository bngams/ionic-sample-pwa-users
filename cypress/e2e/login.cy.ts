describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8100/auth');

    const email = 'eve.holt@reqres.in';
    const password = 'cityslicka';
    cy.get('[data-test=email] input').type(`${email}`)
    cy.get('[data-test=password] input').type(`${password}`)
    cy.get('[data-test=submit]').click();
    // redirect after submit
    // timeout?
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/home')
    })
  })
})
