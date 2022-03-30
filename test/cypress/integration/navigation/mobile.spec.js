describe('NAVIGATION: Mobile menu', () => {
  Cypress.env('RESOLUTIONS').forEach((resolution) => {
    const { name, orientation } = resolution;
    context(`Testing on ${name} screen in ${orientation} mode`, () => {
      before(() => cy.viewport(resolution.width, resolution.height));

      beforeEach(() => cy.logout());

      it('Check if there is a open menu button in header on home page', () => { });

      it('Check if menu could be opened from header menu button on home page', () => { });

      it('Check if menu could be closed', () => { });

      it('Check if menu link could be visited', () => { });

      it('Check if menu link is colored as active', () => { });
    });
  });
});
