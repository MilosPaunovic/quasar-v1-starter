describe('PAGES: Error', () => {
  Cypress.env('RESOLUTIONS').forEach((resolution) => {
    context(resolution.message, () => {
      before(() => cy.viewport(resolution.width, resolution.height));
      beforeEach(() => cy.logout());

      it('Go to random route and check if Error page is shown', () => {
        cy.bypassLogin('random');

        cy.dataCy('error-label-span').should('be.visible');
        cy.dataCy('error-home-button-link').click().location('pathname').should('eq', '/home');
      });
    });
  });
});
