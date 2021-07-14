describe('Login test case', function () {
    beforeEach(function () {
        cy.viewport('macbook-13');
        cy.visit('/');
    })
    it('Regist user', function () {
        cy.wait(7000);
        cy.generarRegistro('Oscar Ponce','184637561','tel.opj@hotmail.cl','L_123450','931114481');
    });
  
})