describe('NAVIGATION: Mobile menu', () => {
  Cypress.env('RESOLUTIONS').filter((r) => r.type !== 'desktop').forEach((resolution) => {
    context(resolution.message, () => {
      before(() => cy.viewport(resolution.width, resolution.height));

      beforeEach(() => cy.logout());

      it('Check if there is a hamburger menu button in header on home page', () => { });

      it('Check if there is a centered logo on home page', () => { });

      it('Check if menu could be opened from hamburger button on home page', () => { });

      it('Check if menu could be closed', () => { });

      it('Check if menu link could be visited', () => { });

      it('Check if active menu link is colored as active', () => { });

      it('Check if user could log out', () => { });
    });
  });
});
