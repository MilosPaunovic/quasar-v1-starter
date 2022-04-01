describe('NAVIGATION: Desktop header', () => {
  Cypress.env('RESOLUTIONS').filter((r) => r.type === 'desktop').forEach((resolution) => {
    context(resolution.message, () => {
      before(() => cy.viewport(resolution.width, resolution.height));

      beforeEach(() => cy.logout());

      it('Check if there is a color mode toggle on home page', () => { });

      it('Check if color mode could be switched to dark and back to light', () => { });

      it('Check if there is Settings link on home page', () => { });

      it('Check if there is logout button on home page', () => { });
    });
  });
});
