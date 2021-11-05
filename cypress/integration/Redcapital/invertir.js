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
        cy.get(':nth-child(1) > .container > .layout.elevation-2 > .btn-go-where-the-endermans-lives > [style="width: 100%;"] > :nth-child(1) > div[data-v-4ce5d84f=""] > .rc-button_scol').click();
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
        //¿como funciona redcapital para los inversionistas?
        cy.get(':nth-child(1) > .v-expansion-panel__container > .v-expansion-panel__header').click();
        cy.wait(5000);
        //¿cuales son los respaldos para los inversionistas?
        cy.get(':nth-child(2) > .v-expansion-panel__container > .v-expansion-panel__header').click();
        cy.wait(5000);
        //¿cuales son los riesgos?
        cy.get(':nth-child(3) > .v-expansion-panel__container > .v-expansion-panel__header').click();
        cy.wait(5000);
        //¿redcapital garantiza las inversiones?
        cy.get(':nth-child(4) > .v-expansion-panel__container > .v-expansion-panel__header').click();
        cy.wait(5000);
        //respaldos y riesgos de leasing o leaseback
        cy.get(':nth-child(5) > .v-expansion-panel__container > .v-expansion-panel__header').click();
        cy.wait(5000);
        //respaldos y riesgos de cheques
        cy.get(':nth-child(6) > .v-expansion-panel__container > .v-expansion-panel__header').click();
        cy.wait(5000);
        //respaldos y riesgos de confirming
        cy.get(':nth-child(7) > .v-expansion-panel__container > .v-expansion-panel__header').click();
        cy.wait(5000);
        //respaldos y riesgos de facturas
        cy.get(':nth-child(8) > .v-expansion-panel__container > .v-expansion-panel__header').click();
        cy.wait(5000);
        //respaldos y riesgos decreditos con aval sgr 
        cy.get(':nth-child(9) > .v-expansion-panel__container > .v-expansion-panel__header').click();
        cy.wait(5000);
        //respaldo y riesgos creditos
        cy.get(':nth-child(10) > .v-expansion-panel__container > .v-expansion-panel__header').click();
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
    
    it.only('Testeo a enlace revisa tu perfil de inversión', () => {
        //Presionar enlace invertir en banner
        cy.get('.v-toolbar__items > [href="/invertir"]').click();
        cy.wait(5000);
        //enlace revisa tu perfil de inversión
        cy.get(':nth-child(3) > .layout > :nth-child(2) > .ma-0 > a').click();
        cy.wait(5000);
    })
})