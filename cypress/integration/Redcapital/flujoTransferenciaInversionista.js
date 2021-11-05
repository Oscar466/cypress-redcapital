describe('Testeo sitio inversionista menú ', () => {
    beforeEach(function () {
        cy.viewport('macbook-13');
        cy.visit('https://dev-cl.netlify.app/');
    })    
    it('Test transferencias',()=>{
         //iniciar sesion
         cy.get('[style="text-transform: capitalize; height: auto; padding: 5px 17px; background: rgb(236, 107, 28) !important; font-size: 1rem !important;"] > .v-btn__content').click();
         cy.wait(5000);
         //rut
         cy.get('.justify-center > .container > .layout > :nth-child(1) > .dni-field > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('173222149');
         //cy.get('.justify-center > .container > .layout > :nth-child(1) > .dni-field > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('173222149');
         cy.wait(5000);
         //contraseña
         cy.get('.justify-center > .container > .layout > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('123qwe');
         cy.wait(5000);
         //ingresar
         cy.get('.justify-center > .container > .layout > .text-xs-center > .btn-panel > .v-btn__content').click({force:true});
         cy.wait(5000);
         //cerrar ventana emergente 1
         cy.get('.v-dialog__content--active > .v-dialog > .v-card > .btnclose > .v-btn__content').click();
         cy.wait(5000);
         //click sitio inversionista
         cy.get('.btnsitio2 > .v-btn__content > .text-capitalize').click();
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
         //anular inversion
         cy.get(':nth-child(1) > :nth-child(2) > .text-capitalize').click();
         cy.wait(5000);
         //comentario
         cy.get('textarea').type('me di cuenta que puedo invertir en otra empresa mejor');
         cy.wait(5000);
         //enviar
         cy.get('.v-dialog__content--active > .v-dialog > .v-card > .container > .layout > .flex > .pt-3 > .v-btn > .v-btn__content').click();
         cy.wait(5000);
         //input id
         cy.get('.layout > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections > input').click().type('1052');
         cy.wait(5000);
         //select nombre
         cy.get('.layout > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections > input').click().type('5000');
         cy.wait(5000);
         //limpiar filtros
         cy.get('.border-radius-circle').click();
         cy.wait(5000);
         //boton actualizar
         cy.get('.bg-responsive > .flex > :nth-child(3)').click();
         cy.wait(5000);
         //click pestaña transferencia anulada
         cy.get(':nth-child(3) > .v-tabs__item').click();
         cy.wait(5000);
         //transferencias pendientes
         cy.get(':nth-child(2) > .v-tabs__item').click();
         cy.wait(5000);
         //click primer id
        // cy.get(':nth-child(1) > .v-list__tile > .v-list__tile__action > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
         //cy.wait(5000);
         //cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(1) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
         //cy.wait(5000);
 
 
     })
     
    it('Testeo estado de pago', () => {
        //iniciar sesion
        cy.get('[style="text-transform: capitalize; height: auto; padding: 5px 17px; background: rgb(236, 107, 28) !important; font-size: 1rem !important;"] > .v-btn__content').click();
        cy.wait(5000);
        //rut
        cy.get('.justify-center > .container > .layout > :nth-child(1) > .dni-field > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('173222149');
        //cy.get('.justify-center > .container > .layout > :nth-child(1) > .dni-field > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('173222149');
        cy.wait(5000);
        //contraseña
        cy.get('.justify-center > .container > .layout > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('123qwe');
        cy.wait(5000);
        //ingresar
        cy.get('.justify-center > .container > .layout > .text-xs-center > .btn-panel > .v-btn__content').click({ force: true });
        cy.wait(5000);
        //cerrar ventana emergente 1
        cy.get('.v-dialog__content--active > .v-dialog > .v-card > .btnclose > .v-btn__content').click();
        cy.wait(5000);
        //click sitio inversionista
        cy.get('.btnsitio2 > .v-btn__content > .text-capitalize').click();
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
        cy.get('.border-radius-circle > .v-btn_content').click();
        cy.wait(5000);
    })
    
    it('Testeo detalle de cuotas', () => {
        //iniciar sesion
        cy.get('[style="text-transform: capitalize; height: auto; padding: 5px 17px; background: rgb(236, 107, 28) !important; font-size: 1rem !important;"] > .v-btn__content').click();
        cy.wait(5000);
        //rut
        cy.get('.justify-center > .container > .layout > :nth-child(1) > .dni-field > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('173222149');
        //cy.get('.justify-center > .container > .layout > :nth-child(1) > .dni-field > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('173222149');
        cy.wait(5000);
        //contraseña
        cy.get('.justify-center > .container > .layout > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('123qwe');
        cy.wait(5000);
        //ingresar
        cy.get('.justify-center > .container > .layout > .text-xs-center > .btn-panel > .v-btn__content').click({ force: true });
        cy.wait(5000);
        //cerrar ventana emergente 1
        cy.get('.v-dialog__content--active > .v-dialog > .v-card > .btnclose > .v-btn__content').click();
        cy.wait(5000);
        //click sitio inversionista
        cy.get('.btnsitio2 > .v-btn__content > .text-capitalize').click();
        cy.wait(5000);
        //click en menu
        cy.get('.dashboard-navbar > .layout > .flex > .font-weight-bold').click();
        cy.wait(5000);
        //click en mis inversiones
        cy.get('.pa-2 > :nth-child(2) > .v-list__group > .v-list__group__header').click();
        cy.wait(5000);
        //click detalle de cuotas
        cy.get('.pa-2 > :nth-child(2) > .v-list__group > .v-list__group__items > :nth-child(5) > .v-list > .transparent > .v-list__tile').click({force:true});
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
        cy.get('.border-radius-circle > .v-btn__content').trigger('click',{force:true});
        cy.wait(5000);
        //actualizar
        cy.get('[style="border-radius: 30px 30px 0px 0px; margin-left: 0px; margin-right: 0px; background-color: rgb(253, 119, 63) !important;"] > .flex > :nth-child(3)').click({force:true});
        cy.wait(5000);
    })
    
    it('cartola', () => {
        //iniciar sesion
        cy.get('[style="text-transform: capitalize; height: auto; padding: 5px 17px; background: rgb(236, 107, 28) !important; font-size: 1rem !important;"] > .v-btn__content').click();
        cy.wait(5000);
        //rut
        cy.get('.justify-center > .container > .layout > :nth-child(1) > .dni-field > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('173222149');
        //cy.get('.justify-center > .container > .layout > :nth-child(1) > .dni-field > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('173222149');
        cy.wait(5000);
        //contraseña
        cy.get('.justify-center > .container > .layout > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('123qwe');
        cy.wait(5000);
        //ingresar
        cy.get('.justify-center > .container > .layout > .text-xs-center > .btn-panel > .v-btn__content').click({ force: true });
        cy.wait(5000);
        //cerrar ventana emergente 1
        cy.get('.v-dialog__content--active > .v-dialog > .v-card > .btnclose > .v-btn__content').click();
        cy.wait(5000);
        //click sitio inversionista
        cy.get('.btnsitio2 > .v-btn__content > .text-capitalize').click();
        cy.wait(5000);
        //click en menu
        cy.get('.dashboard-navbar > .layout > .flex > .font-weight-bold').click();
        cy.wait(5000);
        //click cartola mensual sii
        cy.get('.pa-2 > :nth-child(2) > .v-list__group > .v-list__group__items > :nth-child(7) > .v-list > .transparent > .v-list__tile > .v-list__tile__title').click({ force: true });
        cy.wait(5000);
        //select de periodo
        cy.get('.md8 > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections > input').click();
        cy.wait(5000);
        //periodo seleccionado
        cy.get('.md8 > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections > input').click();
        cy.wait(5000);
        cy.get('.v-input--selection-controls__ripple').click();
        cy.wait(5000);
        //actualizar periodo
        cy.get('.flex > :nth-child(3) > .v-btn__content').click();
        cy.wait(5000);
        //descargar
        cy.get('[style="background-color: rgb(253, 119, 63) !important; border-radius: 30px 30px 0px 0px; margin-left: 0px; margin-right: 0px;"] > .flex > :nth-child(1)').click();
        cy.wait(5000);
        //limpiar filtros
        cy.get('.border-radius-circle > .v-btn__content').click();
        cy.wait(5000);
        //actualizar
        cy.get('.flex > :nth-child(3) > .v-btn__content').click();
        cy.wait(5000);
    })


})