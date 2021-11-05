describe('Editar empresa',()=>{
    beforeEach(function () {
        cy.viewport('macbook-13');
        cy.visit('https://dev-cl.netlify.app/');
    })
    it('Editar empresa',()=>{
        cy.wait(5000);
        cy.get('[href="/login"] > .v-btn__content').click();
        cy.wait(5000);
        cy.get('.justify-center > .container > .layout > :nth-child(1) > .dni-field > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('173222149');
        cy.get('.justify-center > .container > .layout > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('123qwe');
        cy.wait(5000);
        //seleccionar sitio solicitante
        cy.get('.btnsitios2 > .v-btn__content > .text-capitalize').click();
        cy.wait(5000);
        //mis empresas
        cy.get(':nth-child(7) > .v-list__tile > .v-list__tile__action').click();
        cy.wait(5000);
        //click en editar
        cy.get(':nth-child(4) > :nth-child(4) > .v-icon').click();
        cy.wait(5000);
        //editar direccion
        cy.get(':nth-child(6) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type('los aromos test');
        cy.wait(5000);
        //editar telefono
        cy.get(':nth-child(7) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type('56978436188');
        cy.wait(5000);
        //select pais
        cy.get(':nth-child(8) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
        cy.wait(5000);
        //pais seleccionado peru
        cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(3) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
        cy.wait(5000);
        //email
        cy.get(':nth-child(9) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('test@test.cl');
        cy.wait(5000);
        //select de comuna
        cy.get(':nth-child(10) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
        cy.wait(5000);
        //comuna seleccionada iquique
        cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(1) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
        cy.wait(5000);
        //select a quien vendes
        cy.get(':nth-child(11) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
        cy.wait(5000);
        //opcion seleccionada empresas
        cy.get('.menuable__content__active > .v-select-list > .v-list > div.primary--text > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
        cy.wait(5000);
        //select region
        cy.get(':nth-child(12) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
        cy.wait(5000);
        //region seleccionada antofagasta
        cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(2) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
        cy.wait(5000);
        //pagina web
        cy.get(':nth-child(13) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('www.test.cl');
        cy.wait(5000);
        //sintesis empresa
        cy.get(':nth-child(14) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('empresa dedicada al rubro de la minería');
        cy.wait(5000);
        //text tarea
        cy.get('textarea').type('empresa con crecimiento exponencial en los últimos 10 años');
        cy.wait(5000);
        //guardar cambios
        cy.get('.lg12 > .layout > .flex > .btn-panel > .v-btn__content').click();
        cy.wait(5000);
    })
})