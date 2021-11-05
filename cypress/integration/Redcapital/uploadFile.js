describe('Upload File', function () {
    beforeEach(function () {
        cy.viewport('macbook-13');
        cy.visit('https://dev-cl.netlify.app/');
    })
    it('ceder facturas', () => {
        //iniciar sesion
        cy.get('[href="/login"] > .v-btn__content').click();
        cy.wait(5000);
        //rut
        cy.get('.justify-center > .container > .layout > :nth-child(1) > .dni-field > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('173222149');
        cy.wait(5000);
        //contraseña
        cy.get('.justify-center > .container > .layout > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('123qwe');
        cy.wait(5000);
        //ingresar
        cy.get('.justify-center > .container > .layout > .text-xs-center > .btn-panel > .v-btn__content').click();
        cy.wait(5000);
        //ir a sitio solicitante
        cy.get('.btnsitio2 > .v-btn__content > .text-capitalize').click();
        cy.wait(5000);
        //cerrar ventana
        cy.get('.v-dialog__content--active > .v-dialog > .v-card > .btnclose > .v-btn__content').click();
        cy.wait(5000);
        //ir a ceder facturas
        cy.get('.v-list > :nth-child(4) > .v-list__tile > .v-list__tile__action').click();
        cy.wait(5000);
        //Cargar archivo
       // const fileXml = 'sampleXml.xml';
        cy.get('#app > .text-capitalize > .v-btn__content > h3').attachFile('sampleXml.xml',{allowEmpty:true});
        cy.wait(5000);
        cy.get('.flex.pa-3 > .text-xs-center > .btn-panel > .v-btn__content').click({force:true});
        cy.wait(5000);

    })
})