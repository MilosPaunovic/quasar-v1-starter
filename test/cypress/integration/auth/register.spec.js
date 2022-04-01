describe('AUTH: Register', () => {
  Cypress.env('RESOLUTIONS').forEach((resolution) => {
    context(resolution.message, () => {
      before(() => cy.viewport(resolution.width, resolution.height));

      beforeEach(function () {
        cy.logout().visit('/register');

        cy.intercept('POST', 'register').as('register');

        cy.fixture(`${Cypress.env('ENVIRONMENT')}/auth`).then((auth) => {
          this.auth = auth;
        });
      });

      it('Test route /register', () => {
        cy.testRoute('register');
      });

      it('Register attempt with no parameters', () => { });

      it('Register attempt with missing name parameter', () => { });

      it('Register attempt with missing email parameter', () => { });

      it('Register attempt with missing password parameter', () => { });

      it('Register attempt with missing name and email parameters', () => { });

      it('Register attempt with missing name and password parameters', () => { });

      it('Register attempt with missing email and password parameters', () => { });

      it('Register attempt with existing email', () => { });

      it('Register attempt with valid parameters', () => { });

      it('Check if password visibility can be changed', () => { });

      it('Check is there a working link to login page', () => {
        cy.dataCy('register-login-link').click()
          .location('pathname').should('eq', '/login');
      });
    });
  });
});
