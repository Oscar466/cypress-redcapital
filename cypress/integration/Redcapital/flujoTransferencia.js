describe('Testeo sitio inversionista menú ',()=>{
    beforeEach(function () {
        cy.viewport('macbook-13');
        cy.visit('https://dev-cl.netlify.app/');
    })
    it('Test transferencias',()=>{
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
        //click sitio inversionista
        cy.get('.btnsitios2 > .v-btn__content > .text-capitalize').click();
        cy.wait(5000);
        //click en menu
        cy.get('.dashboard-navbar > .layout > .flex > .font-weight-bold').click();
        cy.wait(5000);
        //click en mis inversiones
        cy.get('.pa-2 > :nth-child(2) > .v-list__group > .v-list__group__header').click();
        cy.wait(5000);
        //click en transferencias pedientes
        cy.get('.pa-2 > :nth-child(2) > .v-list__group > .v-list__group__items > :nth-child(2) > .v-list > .transparent > .v-list__tile').click();
        cy.wait(5000);
        //input id
        cy.get('.layout > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections > input').type('1052').clear();
        cy.wait(5000);
        //select nombre
        cy.get('.layout > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections > input').click().type('5000');
        cy.wait(5000);
        //limpiar filtros
        cy.get('.border-radius-circle > .v-btn__content').click();
        cy.wait(5000);
        //boton actualizar
        cy.get('.bg-responsive > .flex > :nth-child(3)').click();
        cy.wait(5000);
        //click pestaña transferencia anulada
        cy.get(':nth-child(3) > .v-tabs__item').click();
        cy.wait(5000);
        //click primer id
        cy.get(':nth-child(1) > .v-list__tile > .v-list__tile__action > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
        cy.wait(5000);
        cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(1) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
        cy.wait(5000);


    })
    it('Testeo estado de pago',()=>{
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
         //click sitio inversionista
         cy.get('.btnsitios2 > .v-btn__content > .text-capitalize').click();
         cy.wait(5000);
         //click en menu
         cy.get('.dashboard-navbar > .layout > .flex > .font-weight-bold').click();
         cy.wait(5000);
         //click en mis inversiones
         cy.get('.pa-2 > :nth-child(2) > .v-list__group > .v-list__group__header').click();
         cy.wait(5000);
         //click en Estado de pagos
         cy.get('.pa-2 > :nth-child(2) > .v-list__group > .v-list__group__items > :nth-child(4) > .v-list > .transparent > .v-list__tile').click();
         cy.wait(5000);
         // input id
         cy.get('.layout > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections > input').type('6047');
         cy.wait(5000);
         //nombre input
         cy.get('.layout > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections > input').type('jjjsk');
         cy.wait(5000);
         //detalle de pago
         cy.get(':nth-child(2) > .v-tabs__item').click();
         cy.wait(5000);
         //detalle de pago
         cy.get(':nth-child(3) > .v-tabs__item').click();
         cy.wait(5000);
         //limpiar filtros
         cy.get(':nth-child(3) > .v-tabs__item').click();
         cy.wait(5000);
    })
    it('Testeo detalle de cuotas',()=>{
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
         //click sitio inversionista
         cy.get('.btnsitios2 > .v-btn__content > .text-capitalize').click();
         cy.wait(5000);
         //click en menu
         cy.get('.dashboard-navbar > .layout > .flex > .font-weight-bold').click();
         cy.wait(5000);
         //click en mis inversiones
         cy.get('.pa-2 > :nth-child(2) > .v-list__group > .v-list__group__header').click();
         cy.wait(5000);
         //click detalle de cuotas
         cy.get('.pa-2 > :nth-child(2) > .v-list__group > .v-list__group__items > :nth-child(5) > .v-list > .transparent > .v-list__tile').click();
         cy.wait(5000);
         //input id
         cy.get('.layout > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections > input').type('45666');
         cy.wait(5000);
         //input nombre
         cy.get('.layout > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections > input').type('5666');
         cy.wait(5000);
         //tipo
         cy.get(':nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections > input').type('5566');
         cy.wait(5000);
         //estado
         cy.get(':nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections > input').type('5666');
         cy.wait(5000);
         //limpiar filtros
         cy.get(':nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections > input').click();
         cy.wait(5000);
         //actualizar
         cy.get('.flex > :nth-child(3) > .v-btn__content').click();
         cy.wait(5000);
    })
    
})