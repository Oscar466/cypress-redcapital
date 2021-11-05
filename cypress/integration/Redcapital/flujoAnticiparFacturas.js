describe('Anticipar facturas', function(){
    beforeEach(function(){
        cy.viewport('macbook-13') ;
        cy.visit('https://dev-cl.netlify.app/');
    })
    it('Anticipar facturas', function(){
        //loggear usuario
        cy.wait(5000);
        cy.get('[style="text-transform: capitalize; height: auto; padding: 5px 17px; background: rgb(236, 107, 28) !important; font-size: 1rem !important;"] > .v-btn__content').click();
        cy.wait(5000);
        cy.get('.justify-center > .container > .layout > :nth-child(1) > .dni-field > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('173222149');
        cy.get('.justify-center > .container > .layout > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('123qwe');
        cy.wait(5000);
        cy.get('.justify-center > .container > .layout > .text-xs-center > .btn-panel > .v-btn__content').click();
        cy.wait(5000);
        //cerrar ventana emergente 1
        cy.get('.v-dialog__content--active > .v-dialog > .v-card > .btnclose > .v-btn__content').click();
        cy.wait(5000);
        
        //seleccionar mis empresas
        cy.get(':nth-child(7) > .v-list__tile > .v-list__tile__action').click();
        cy.wait(5000);
        /*//seleccionar siguiente página para encontrar igestec
        cy.get('[aria-label="Next page"] > .v-btn__content > .v-icon').click();
        cy.wait(5000);
        */
        //seleccionar igestec
        cy.get(':nth-child(2) > :nth-child(3) > .btn-seleccionar-select > .v-btn__content').click();
        cy.wait(5000);
        //luego seleccionar Anticipar facturas
        cy.get('.layout > .v-navigation-drawer > .v-list > :nth-child(3) > .v-list__tile > .v-list__tile__action').click();
        cy.wait(5000);
        //presionar todas
        cy.get('.v-input--radio-group__input > :nth-child(1) > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
        cy.wait(5000);
        //clicker folio
        cy.get('.text-xs-right > :nth-child(3) > .v-table__overflow > .v-datatable > thead > :nth-child(1) > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
        cy.wait(5000);
        /*//obtener facturas desde SII
        cy.get('.justify-center > .btn-panel > .v-btn__content').click();
        cy.wait(10000);
        */
        //boton siguiente en resumen de la operación
        cy.get('.md3 > .pa-3 > .text-capitalize > .v-btn__content').click();
        cy.wait(5000);
        //carga manual de las facturas xml
        cy.get(':nth-child(3) > .v-tabs__item').click();
        cy.wait(5000);
        //carga masiva de facturas
        cy.get(':nth-child(4) > .v-tabs__item').click();
        cy.wait(5000);
        //boton volver
        cy.get('[style=""] > .v-stepper__wrapper > .my-3 > .wrap > .xs12 > .text-capitalize > .v-btn__content').click();
        cy.wait(5000);
      
        
        
    })
})