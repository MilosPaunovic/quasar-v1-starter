describe('NAVIGATION: Desktop header', () => {
  Cypress.env('RESOLUTIONS').forEach((resolution) => {
    const { name, orientation } = resolution;
    context(`Testing on ${name} screen in ${orientation} mode`, () => {
      before(() => cy.viewport(resolution.width, resolution.height));

      beforeEach(() => cy.logout());

      it('Check if there is a open menu button on home page', () => { });

      it('Check if there is a color mode toggle on home page', () => { });

      it('Check if color mode could be switched to dark and back to light', () => { });

      it('Check if there is logout button on home page', () => { });

      it('Check if there is Settings link on home page', () => { });
    });
  });
});
