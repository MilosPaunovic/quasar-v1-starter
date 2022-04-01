describe('PAGES: Settings', () => {
  Cypress.env('RESOLUTIONS').forEach((resolution) => {
    context(resolution.message, () => {
      before(() => cy.viewport(resolution.width, resolution.height));
      beforeEach(() => cy.logout());

      it('Test route /settings', () => { });

      it('Check if there is a color mode toggle in header on settings page', () => { });

      it('Check if there is a color mode toggle on the page itself', () => { });

      it('Check if color mode could be switched to dark and back to light from the page itself', () => { });
    });
  });
});
