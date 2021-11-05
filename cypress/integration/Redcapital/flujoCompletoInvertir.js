describe('Login test case', function(){
    beforeEach(function(){
        cy.viewport('macbook-13') ;
        cy.visit('https://dev-cl.netlify.app/');
    })
    it.only('Flujo invertir con pagar despues', function(){
         cy.wait(5000);
        cy.get('[style="text-transform: capitalize; height: auto; padding: 5px 17px; background: rgb(236, 107, 28) !important; font-size: 1rem !important;"] > .v-btn__content').click();
        cy.wait(5000);
        cy.get('.justify-center > .container > .layout > :nth-child(1) > .dni-field > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('173222149');
        cy.wait(5000);
        cy.get('.justify-center > .container > .layout > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('123qwe');
        cy.wait(5000);
        cy.get('.justify-center > .container > .layout > .text-xs-center > .btn-panel > .v-btn__content').click();
        cy.wait(5000);
        //cerrar ventana emergente
        cy.get('.v-dialog__content--active > .v-dialog > .v-card > .btnclose > .v-btn__content').click();
        cy.wait(5000);
        // voler al inicio
        cy.visit('https://dev-cl.netlify.app/');
        cy.wait(5000);
        //invertir
        cy.get('.v-toolbar__items > [href="/invertir"] > .v-btn__content').click();
        cy.wait(5000);
        //seleccionar Factura a importadora exportadora y comercial ocho ruedas ltda
        cy.get(':nth-child(1) > .container > .layout.elevation-2 > .pl-3 > .pt-2 > .black--text > .ma-0').click();
        cy.wait(5000);
        //seleccionar monto
        cy.get(':nth-child(4) > .layout > :nth-child(1) > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type('1000000');
        cy.wait(5000);
        //simular
        cy.get('.md3 > .v-btn > .v-btn__content').click();
        cy.wait(5000);
        //click en detalle
        cy.get(':nth-child(3) > .v-tabs__item').click();
        cy.wait(5000);
        //click en estadisticas
        cy.get(':nth-child(4) > .v-tabs__item').click();
        cy.wait(5000);
        //click en respaldos
        cy.get(':nth-child(5) > .v-tabs__item').click();
        cy.wait(5000);
        //invertir ahora
        cy.get('.mb-4 > .layout > .flex > .v-btn > .v-btn__content').click();
        cy.wait(5000);
        //seleccionar solo los derechos
        //cy.get('.v-radio.primary--text > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
        //cy.wait(5000);
        //seleccionar pagar total 
        cy.get('.v-radio.primary--text > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
        cy.wait(5000);
        //continuar
        cy.get('.v-card > .container > .row > .flex > .v-btn > .v-btn__content').click();
        cy.wait(5000);
        //presionar modificar inversion (para probar boton)
        cy.get('.column > :nth-child(3) > .layout > :nth-child(2) > .v-btn > .v-btn__content').click();
        cy.wait(5000);
        //volver a seleccionar invertir ahora
        cy.get('.mb-4 > .layout > .flex > .v-btn > .v-btn__content').click();
        cy.wait(5000);
        //presionar continuar otra vez
        cy.get('.v-card > .container > .row > .flex > .v-btn > .v-btn__content').click();
        cy.wait(5000);
        //aceptar los terminos
        cy.get('.v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
        cy.wait(5000);
        //continuar
        cy.get(':nth-child(3) > .layout > :nth-child(3) > .v-btn--block > .v-btn__content').click();
        cy.wait(5000);
        //presionar si quiero invertir
        cy.get('.v-dialog__content--active > .v-dialog > .v-card > .container > .layout > .flex > .separarbtn > .theme--dark > .v-btn__content > h5').click({force:true});
        cy.wait(5000);
        //metodo de pago -> transferencia
        cy.get(':nth-child(3) > .text-xs-center > img').click();
        cy.wait(5000);
        //Transferir monto total
        //cy.get('.v-dialog__content--active > .v-dialog > .v-card > .container > .layout > .flex > .separarbtn > .theme--dark > .v-btn__content > h5').click();
        //cy.wait(5000);
        //pagar despues
        cy.get('.text-xs-center > .layout > :nth-child(2) > .v-btn > .v-btn__content').click();
        cy.wait(5000);
        //pagar
        cy.get(':nth-child(1) > :nth-child(1) > .text-capitalize > .v-btn__content').click();
        cy.wait(5000);
        //seleccionar
        cy.get('.v-select__slot > input').click();
        cy.wait(5000);
        //seleccionar monto completo
        cy.get('.menuable__content__active > .v-select-list > .v-list > div.primary--text > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
        cy.wait(5000);
        //tranferir
        cy.get(':nth-child(3) > .text-xs-center > img').click();
        cy.wait(5000);
        
    })
    
    it('Flujo invertir con pagar ahora', function(){
        cy.wait(5000);
        cy.get('[style="text-transform: capitalize; height: auto; padding: 5px 17px; background: rgb(236, 107, 28) !important; font-size: 1rem !important;"] > .v-btn__content').click();
        cy.wait(5000);
        cy.get('.justify-center > .container > .layout > :nth-child(1) > .dni-field > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('173222149');
        cy.wait(5000);
        cy.get('.justify-center > .container > .layout > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('123qwe');
        cy.wait(5000);
        cy.get('.justify-center > .container > .layout > .text-xs-center > .btn-panel > .v-btn__content').click();
        cy.wait(5000);
        //cerrar ventana emergente
        cy.get('.v-dialog__content--active > .v-dialog > .v-card > .btnclose > .v-btn__content').click();
        cy.wait(5000);
        // voler al inicio
        cy.visit('https://dev-cl.netlify.app/');
        cy.wait(5000);
        //invertir
        cy.get('.v-toolbar__items > [href="/invertir"] > .v-btn__content').click();
        cy.wait(5000);
        //seleccionar Factura a importadora exportadora y comercial ocho ruedas ltda
        cy.get(':nth-child(1) > .container > .layout.elevation-2 > .pl-3 > .pt-2 > .black--text > .ma-0').click();
        cy.wait(5000);
        //seleccionar monto
        cy.get(':nth-child(4) > .layout > :nth-child(1) > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type('1000000');
        cy.wait(5000);
        //simular
        cy.get('.md3 > .v-btn > .v-btn__content').click();
        cy.wait(5000);
        //click en detalle
        cy.get(':nth-child(3) > .v-tabs__item').click();
        cy.wait(5000);
        //click en estadisticas
        cy.get(':nth-child(4) > .v-tabs__item').click();
        cy.wait(5000);
        //click en respaldos
        cy.get(':nth-child(5) > .v-tabs__item').click();
        cy.wait(5000);
        //invertir ahora
        cy.get('.mb-4 > .layout > .flex > .v-btn > .v-btn__content').click();
        cy.wait(5000);
        //seleccionar solo los derechos
        //cy.get('.v-radio.primary--text > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
        //cy.wait(5000);
        //seleccionar pagar total 
        cy.get('.v-radio.primary--text > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
        cy.wait(5000);
        //continuar
        cy.get('.v-card > .container > .row > .flex > .v-btn > .v-btn__content').click();
        cy.wait(5000);
        //presionar modificar inversion (para probar boton)
        cy.get('.column > :nth-child(3) > .layout > :nth-child(2) > .v-btn > .v-btn__content').click();
        cy.wait(5000);
        //volver a seleccionar invertir ahora
        cy.get('.mb-4 > .layout > .flex > .v-btn > .v-btn__content').click();
        cy.wait(5000);
        //presionar continuar otra vez
        cy.get('.v-card > .container > .row > .flex > .v-btn > .v-btn__content').click();
        cy.wait(5000);
        //aceptar los terminos
        cy.get('.v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
        cy.wait(5000);
        //continuar
        cy.get(':nth-child(3) > .layout > :nth-child(3) > .v-btn--block > .v-btn__content').click();
        cy.wait(5000);
        //presionar si quiero invertir
        cy.get('.v-dialog__content--active > .v-dialog > .v-card > .container > .layout > .flex > .separarbtn > .theme--dark > .v-btn__content > h5').click({force:true});
        cy.wait(5000);
        //metodo de pago -> transferencia
        cy.get(':nth-child(3) > .text-xs-center > img').click();
        cy.wait(5000);
        //Transferir monto total
        //cy.get('.v-dialog__content--active > .v-dialog > .v-card > .container > .layout > .flex > .separarbtn > .theme--dark > .v-btn__content > h5').click();
        //cy.wait(5000);
        //confirmar transferencia
        cy.get('.text-xs-center > .layout > :nth-child(3) > .v-btn > .v-btn__content').click();
        cy.wait(5000);
        
    })
})