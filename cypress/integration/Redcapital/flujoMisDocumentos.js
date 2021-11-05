describe('Testeo a Necesito asesoría en sitio de solicitante ',()=>{
    beforeEach(function () {
        cy.viewport('macbook-13');
        cy.visit('https://dev-cl.netlify.app/');
    })
    it('Test mis documentos',()=>{
        //iniciar sesion
        cy.get('[style="text-transform: capitalize; height: auto; padding: 5px 17px; background: rgb(236, 107, 28) !important; font-size: 1rem !important;"] > .v-btn__content').click();
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
        //click en cerrar ventana emergente
        cy.get('.v-dialog__content--active > .v-dialog > .v-card > .btnclose > .v-btn__content').click();
        cy.wait(5000);
        //click en mis documentos
        cy.get(':nth-child(8) > .v-list__tile > .v-list__tile__action').click();
        cy.wait(5000);
        //click en pestaña contratos
        cy.get(':nth-child(1) > .v-tabs__item').click();
        cy.wait(5000);
        //descargar contrato
        cy.get('#contracts > .layout > .container > :nth-child(2) > :nth-child(2) > .v-table__overflow > .v-datatable > tbody > :nth-child(1) > .text-xs-left > .v-btn > .v-btn__content > .v-icon').click();
        cy.wait(5000);
        //click en pestaña mandatos
        cy.get(':nth-child(2) > .v-tabs__item').click();
        cy.wait(5000);
        //descargar mandato
        cy.get('#terms > .layout > .container > :nth-child(2) > :nth-child(2) > .v-table__overflow > .v-datatable > tbody > :nth-child(1) > .text-xs-left > .v-btn > .v-btn__content > .v-icon').click();
        cy.wait(5000);
        //pestaña pagares y respaldo
        cy.get(':nth-child(3) > .v-tabs__item').click();
        cy.wait(5000);
        //buscador
        cy.get('.ious-and-certificates > .layout > .container > .md6 > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('123456');
        cy.wait(5000);
        //limpiar buscador
        cy.get('.ious-and-certificates > .layout > .container > .md6 > .v-input > .v-input__control > .v-input__slot > :nth-child(2) > .v-input__icon > .v-icon').click();
        cy.wait(5000);
    })
    
})