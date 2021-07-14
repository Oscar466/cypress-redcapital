describe('Anticipar facturas', function(){
    beforeEach(function(){
        cy.viewport('macbook-13') ;
        cy.visit('https://dev-cl.netlify.app/');
    })
    it('Anticipar facturas', function(){
        //loggear usuario
        cy.wait(5000);
        cy.get('[href="/login"] > .v-btn__content').click();
        cy.wait(5000);
        cy.get('.justify-center > .container > .layout > :nth-child(1) > .dni-field > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('173222149');
        cy.get('.justify-center > .container > .layout > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('123qwe');
        cy.wait(5000);
        cy.get('.justify-center > .container > .layout > .text-xs-center > .btn-panel > .v-btn__content').click();
        cy.wait(5000);
        //Ingresar sitio solicitante
        cy.get('.btnsitio2').click();
        cy.wait(5000);
        //cerrar ventana emergente
        cy.get('.v-dialog__content--active > .v-dialog > .v-card > .btnclose > .v-btn__content').click();
        cy.wait(5000);
        //seleccionar mis empresas
        cy.get(':nth-child(7) > .v-list__tile > .v-list__tile__action').click();
        cy.wait(5000);
        //seleccionar siguiente página para encontrar igestec
        cy.get('[aria-label="Next page"] > .v-btn__content > .v-icon').click();
        cy.wait(5000);
        //seleccionar igestec
        cy.get(':nth-child(2) > :nth-child(3) > .btn-seleccionar-select > .v-btn__content').click();
        cy.wait(5000);
        //luego seleccionar Anticipar facturas
        cy.get(':nth-child(3) > .v-list__tile > .v-list__tile__action > .v-icon').click();
        cy.wait(5000);
        //presionar volver a sincronizar
        cy.get('.justify-center > .btn-panel > .v-btn__content').click();
        cy.wait(5000);
        //presionar todas
        cy.get('.v-input--radio-group__input > :nth-child(1) > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
        cy.wait(5000);
        //clicker folio
        cy.get('.text-xs-right > :nth-child(3) > .v-table__overflow > .v-datatable > thead > :nth-child(1) > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
        cy.wait(5000);
        //clicker en buscar
        cy.get('.my-3 > :nth-child(1) > .text-xs-right > .text-xs-left > .container > .layout > .xs6 > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections > input').type("facturas");
        cy.wait(5000);
        //click en lupa para buscar
        cy.get('.my-3 > :nth-child(1) > .text-xs-right > .text-xs-left > .container > .layout > .xs6 > .v-input > .v-input__control > .v-input__slot > .v-select__slot > :nth-child(4) > .v-input__icon > .v-icon').click();
        cy.wait(5000);
        //clicker item carga manual
        cy.get(':nth-child(3) > .v-tabs__item').click();
        cy.wait(5000);
        //clickear folio de carga manual
        cy.get('.text-xs-right > :nth-child(2) > .v-table__overflow > .v-datatable > thead > :nth-child(1) > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
        cy.wait(5000);
        //clickear en buscar
        cy.get(':nth-child(3) > .v-stepper__items > .v-stepper__content > .v-stepper__wrapper > :nth-child(1) > .wrap > .text-xs-right > .text-xs-left > .container > .layout > .offset-xs2 > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections > input').type("facturas");
        cy.wait(5000);
        //click en lupa para buscar
        cy.get(':nth-child(3) > .v-stepper__items > .v-stepper__content > .v-stepper__wrapper > :nth-child(1) > .wrap > .text-xs-right > .text-xs-left > .container > .layout > .offset-xs2 > .v-input > .v-input__control > .v-input__slot > .v-select__slot > :nth-child(4) > .v-input__icon > .v-icon').click();
        cy.wait(5000);
    })
})