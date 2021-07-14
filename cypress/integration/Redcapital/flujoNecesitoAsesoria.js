describe('Testeo a Necesito asesoría en sitio de solicitante ',()=>{
    beforeEach(function () {
        cy.viewport('macbook-13');
        cy.visit('https://dev-cl.netlify.app/');
    })
    it('Test de seleccion ¿cuanto vende tu empresa al mes ?',()=>{
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
        //click en sitio solicitante
        cy.get('.btnsitio2 > .v-btn__content > .text-capitalize').click();
        cy.wait(5000);
        //cerrar ventana emergente
        cy.get('.v-dialog__content--active > .v-dialog > .v-card > .btnclose').click();
        cy.wait(5000);
        //click en Necesito asesoria
        cy.get(':nth-child(5) > .fresponsive > .v-btn__content').click();
        cy.wait(5000);
        // select ¿cuanto vende tu empresa al mes?
        cy.get(':nth-child(3) > .flex > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
        cy.wait(5000);
        //opcion seleccionada entre 2 y 10 millones
        cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(2) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
        cy.wait(5000);
        //cerrar ventana emergente 2
        cy.get('.v-dialog__content--active > .v-dialog > .v-card > .btnclose').click();
        cy.wait(5000);
        //enviar
        cy.get('.md9 > .layout > :nth-child(3) > .v-btn > .v-btn__content').click();
        cy.wait(5000);
    })
    it('Test de seleccion O si prefieres elige tu financiamiento',()=>{
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
        //click en sitio solicitante
        cy.get('.btnsitio2 > .v-btn__content > .text-capitalize').click();
        cy.wait(5000);
        //click para cerrar ventana emergente
        cy.get('.v-dialog__content--active > .v-dialog > .v-card > .btnclose > .v-btn__content').click();
        cy.wait(5000);
        //click en Necesito asesoria
        cy.get(':nth-child(5) > .fresponsive > .v-btn__content').click();
        cy.wait(5000);
        // select o si prefieres elige tu financiamiento
        cy.get(':nth-child(5) > .flex > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
        cy.wait(5000);
        //opcion seleccionada factoring
        cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(1) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
        cy.wait(5000);
        //cerrar ventana emergente 2
        //cy.get('.v-dialog__content--active > .v-dialog > .v-card > .btnclose').click();
        //cy.wait(5000);
        //enviar
        cy.get(':nth-child(5) > :nth-child(3) > .v-btn > .v-btn__content').click();
        cy.wait(5000);
    })
})