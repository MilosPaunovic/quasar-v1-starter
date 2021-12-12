describe('Router guards', () => {
  beforeEach(() => cy.logout());

  it("Try to visit '/home' route unauthenticated.", () => {
    cy.visit('/home').url().should('contain', 'login');
  });
});
