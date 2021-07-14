describe('Testing flujo invertir', () => {
    beforeEach(() => {
        cy.viewport('macbook-13');
        cy.visit('https://dev-cl.netlify.app/');
    })
    it('Flujo invertir', () => {
        //Presionar enlace invertir en banner
        cy.get('.v-toolbar__items > [href="/invertir"]').click();
        cy.wait(5000);
        //check solo oportunidades activas
        cy.get(':nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
        cy.wait(5000);
        //check facturas
        cy.get(':nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
        cy.wait(5000);
        //check creditos(pagare)
        cy.get(':nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
        cy.wait(5000);
        //deslizar rentabilidad
        cy.get(':nth-child(5) > .layout > .xs10 > .v-input > .v-input__control > .v-input__slot > .v-slider > input').trigger('mousedown', 'topRight').click();
        cy.wait(5000);
        //deslizar plazo maximo
        cy.get(':nth-child(6) > .layout > .xs10 > .v-input > .v-input__control > .v-input__slot > .v-slider > input').trigger('mousemove', 'topLeft').click();
        cy.wait(5000);
        //presionar boton filtrar
        cy.get(':nth-child(7) > .layout > .flex').click();
        //Presionar boton mas informacion
        cy.get(':nth-child(1) > .container > .elevation-2 > .btn-go-where-the-endermans-lives > :nth-child(1) > .layout > .flex > .white--text').click();
        cy.wait(5000);
        //ingresar monto
        cy.get(':nth-child(4) > .layout > :nth-child(1) > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type('5000000');
        cy.wait(5000);
        //presionar simular
        cy.get('.md3 > .v-btn > .v-btn__content').click();
        cy.wait(5000);
        //presionar simulacion
        cy.get(':nth-child(2) > .v-tabs__item').click();
        cy.wait(5000);
        //presionar detalle
        cy.get(':nth-child(3) > .v-tabs__item').click();
        cy.wait(5000);
        //presionar respaldos
        cy.get(':nth-child(4) > .v-tabs__item').click();
        cy.wait(5000);
        //presionar invertir
        cy.get('.mb-4 > .layout > .flex > .v-btn').click();
        cy.wait(5000);
        //cerrar modal
        cy.get('.v-dialog__content--active > .v-dialog > .v-form > .v-card > :nth-child(1) > .layout > .flex > .btnclose > .v-btn__content').click();
        cy.wait(5000);

    })
    

   /* it('Testeo a botones de filtrado en invertir',()=>{
        // check solo oprtunidades activas
        cy.get(':nth-child(4) > .layout > :nth-child(1) > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').uncheck();
        cy.wait(5000);
        //check facturas
        cy.get(':nth-child(4) > .layout > :nth-child(1) > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').uncheck();
        cy.wait(5000);
        //check creditos(pagare)
        cy.get(':nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').uncheck();
        cy.wait(5000);
        //deslizar rentabilidad
        cy.get(':nth-child(5) > .layout > .xs10 > .v-input > .v-input__control > .v-input__slot > .v-slider > input').trigger('mousedown','topRight');


    })
    */
    
    it('Testeo enlace revisa las garantias y riesgos', () => {
        //Presionar enlace invertir en banner
        cy.get('.v-toolbar__items > [href="/invertir"]').click();
        cy.wait(5000);
        //se selecciona el enlace revisa las garantias y riesgos   
        cy.get(':nth-child(1) > .layout > :nth-child(2) > .ma-0 > a').click();
        cy.wait(5000);
        //seleccionar que es redcapital ?
        cy.get(':nth-child(1) > .v-expansion-panel__header').click();
        cy.wait(5000);
        //seleccionar cuales son las garantias para los inversionistas
        cy.get(':nth-child(2) > .v-expansion-panel__header').click();
        cy.wait(5000);
        //seleccionar cuales son los riesgos
        cy.get(':nth-child(3) > .v-expansion-panel__header').click();
        cy.wait(5000);
        //seleccionar redcapital garantiza las inversiones?
        cy.get(':nth-child(4) > .v-expansion-panel__header').click();
        cy.wait(5000);
        //seleccionar garantias y riesgos leasing
        cy.get(':nth-child(5) > .v-expansion-panel__header').click();
        cy.wait(5000);
        //seleccionar garantias riesgos y cheques
        cy.get(':nth-child(6) > .v-expansion-panel__header').click();
        cy.wait(5000);
        //seleccionar garantias y riesgos de confirming
        cy.get(':nth-child(7) > .v-expansion-panel__header').click();
        cy.wait(5000);
        //seleccionar garantias y riesgos de facturas
        cy.get(':nth-child(8) > .v-expansion-panel__header').click();
        cy.wait(5000);
        //seleccionar garantias y riesgos de creditos sgr
        cy.get(':nth-child(9) > .v-expansion-panel__header').click();
        cy.wait(5000);
        //testear buscador
        cy.get('.row > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').type('creditos sgr');
        cy.wait(5000);

    })
    
    it('Testeo a enlace revisa como funciona', () => {
        //Presionar enlace invertir en banner
        cy.get('.v-toolbar__items > [href="/invertir"]').click();
        cy.wait(5000);
        //enlace revisa como funciona
        cy.get(':nth-child(2) > .layout > :nth-child(2) > .ma-0 > a').click();
        cy.wait(5000);
    })
    
    it('Testeo a enlace revisa tu perfil de inversión', () => {
        //Presionar enlace invertir en banner
        cy.get('.v-toolbar__items > [href="/invertir"]').click();
        cy.wait(5000);
        //enlace revisa tu perfil de inversión
        cy.get(':nth-child(3) > .layout > :nth-child(2) > .ma-0 > a').click();
        cy.wait(5000);
        //boton volver
        cy.get('.layout.ma-3 > .flex > .v-btn > .v-btn__content').click();
        cy,wait(5000);
    })
})