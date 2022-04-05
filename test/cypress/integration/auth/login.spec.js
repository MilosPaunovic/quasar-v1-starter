describe('AUTH: Login', () => {
  Cypress.env('RESOLUTIONS').forEach((resolution) => {
    context(resolution.message, () => {
      before(() => cy.viewport(resolution.width, resolution.height));

      beforeEach(function () {
        cy.logout();

        cy.intercept('POST', 'login').as('login');

        cy.fixture(`${Cypress.env('ENVIRONMENT')}/auth`).then((auth) => {
          this.auth = auth;
        });
      });

      it('Test route /login', () => {
        cy.testRoute('login');
      });

      it('Login attempt with no credentials', () => { });

      it('Login attempt with wrong email and no password', () => { });

      it('Login attempt with no email and wrong password', () => { });

      it('Login attempt with wrong email and wrong password', () => { });

      it('Login attempt with right email and no password', () => { });

      it('Login attempt with no email and right password', () => { });

      it('Login attempt with right email and wrong password', () => { });

      it('Login attempt with wrong email and right password', () => { });

      it('Login attempt with right email and right password', () => { });

      it('Logout attempt', () => { });

      it('Check if password visibility can be changed', () => { });

      it('Check is there a working link to registration page', () => {
        cy.dataCy('login-register-link').click()
          .location('pathname').should('eq', '/register');
      });

      it('Check is there a working link to forgot password page', () => {
        cy.dataCy('login-forgot-password-link').click()
          .location('pathname').should('eq', '/forgot-password');
      });
    });
  });
});
