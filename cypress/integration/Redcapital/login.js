describe('Login test case', function () {
    var user;
    var pass;
    beforeEach(function () {
        cy.viewport('macbook-13');
        cy.visit('/');
        user = Cypress.env('usuario');
        pass = Cypress.env('password');
    })
    it('Login user', function () {
        cy.wait(7000);
        cy.log(pass);
        cy.credencialesLogin(user, pass);
    });

})