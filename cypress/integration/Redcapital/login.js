describe('Login test case', function () {
    var user;
    var pass;
    var algo;
    beforeEach(function () {
        cy.viewport('macbook-13');
        cy.visit('/');
        user = Cypress.env('usuario');
        pass = Cypress.env('password');
        algo = Cypress.env('something');
    })
    it('Login user', function () {
        cy.wait(7000);
        cy.log(algo);
        cy.wait(5000);
        cy.credencialesLogin(user, pass);
    });

})