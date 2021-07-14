describe('Login test case', function(){
    beforeEach(function(){
        cy.viewport('macbook-13') ;
        cy.visit('https://dev-cl.netlify.app/');
    })
    /*
    it('Flujo invertir con pagar despues', function(){
        cy.wait(5000);
        cy.get('[href="/login"] > .v-btn__content').click();
        cy.wait(5000);
        cy.get('.justify-center > .container > .layout > :nth-child(1) > .dni-field > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('173222149');
        cy.get('.justify-center > .container > .layout > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('123qwe');
        cy.wait(5000);
        cy.get('.justify-center > .container > .layout > .text-xs-center > .btn-panel > .v-btn__content').click();
        cy.wait(5000);
        //volver al inicio
        cy.get('.router-link-active').click();
        cy.wait(5000);
        //invertir
        cy.get('.v-toolbar__items > [href="/invertir"] > .v-btn__content').click();
        cy.wait(5000);
        //seleccionar prueba dev
        cy.get(':nth-child(1) > .container > .elevation-2 > .btn-go-where-the-endermans-lives > :nth-child(1) > .layout > .flex > .white--text').click();
        cy.wait(5000);
        //invertir ahora
        cy.get('.mb-4 > .layout > .flex > .v-btn > .v-btn__content').click();
        cy.wait(5000);
        //seleccionar solo los derechos
        cy.get('.v-radio.primary--text > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
        cy.wait(5000);
        //seleccionar pagar total 
        cy.get('.v-input--radio-group__input > :nth-child(1) > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
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
        cy.get('.v-dialog__content--active > .v-dialog > .v-card > .container > .layout > .flex > .separarbtn > .theme--dark > .v-btn__content > h5').click();
        cy.wait(5000);
        //metodo de pago -> transferencia
        cy.get(':nth-child(3) > .text-xs-center > img').click();
        cy.wait(5000);
        //presionar pagar despues
        cy.get('.text-xs-center > .layout > :nth-child(2) > .v-btn > .v-btn__content').click();
        cy.wait(5000);
    })
    */
       it('Flujo invertir con pagar ahora', function(){
        cy.wait(5000);
        cy.get('[href="/login"] > .v-btn__content').click();
        cy.wait(5000);
        cy.get('.justify-center > .container > .layout > :nth-child(1) > .dni-field > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('173222149');
        cy.get('.justify-center > .container > .layout > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('123qwe');
        cy.wait(5000);
        cy.get('.justify-center > .container > .layout > .text-xs-center > .btn-panel > .v-btn__content').click();
        cy.wait(5000);
        //volver al inicio
        cy.get('.router-link-active').click();
        cy.wait(5000);
        //invertir
        cy.get('.v-toolbar__items > [href="/invertir"] > .v-btn__content').click();
        cy.wait(5000);
        //seleccionar prueba dev
        cy.get(':nth-child(1) > .container > .elevation-2 > .btn-go-where-the-endermans-lives > :nth-child(1) > .layout > .flex > .white--text').click();
        cy.wait(5000);
        //invertir ahora
        cy.get('.mb-4 > .layout > .flex > .v-btn > .v-btn__content').click();
        cy.wait(5000);
        //seleccionar solo los derechos
        cy.get('.v-radio.primary--text > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
        cy.wait(5000);
        //seleccionar pagar total 
        cy.get('.v-input--radio-group__input > :nth-child(1) > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
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
        cy.get('.v-dialog__content--active > .v-dialog > .v-card > .container > .layout > .flex > .separarbtn > .theme--dark > .v-btn__content > h5').click();
        cy.wait(5000);
        //metodo de pago -> transferencia
        cy.get(':nth-child(3) > .text-xs-center > img').click();
        cy.wait(5000);
        //confirmar transferencia
        cy.get('.text-xs-center > .layout > :nth-child(3) > .v-btn > .v-btn__content').click();
        cy.wait(5000);
    })
})