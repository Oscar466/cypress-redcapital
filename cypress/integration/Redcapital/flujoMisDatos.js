describe('Mis datos', function () {
    beforeEach(function () {
        cy.viewport('macbook-13');
        cy.visit('https://dev-cl.netlify.app/');
    })
    it('Perfil usuario', function () {
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
        //click en mis datos
        cy.get(':nth-child(6) > .v-list__tile > .v-list__tile__action').click({ force: true });
        cy.wait(5000);
        //click en editar informacion personal
        cy.get(':nth-child(1) > .v-card > .v-card__title > [style="display: flex; justify-content: space-between; width: 100%;"] > .btn-editar > .v-btn__content > .headline').click();
        cy.wait(5000);
        //nombre
        cy.get('.lg12 > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type('Fake Nombre');
        cy.wait(5000);
        //email
        cy.get('.lg12 > :nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').clear().type('lgallardo@redcapital.cl');
        cy.wait(5000);
        //profesion/oficio
        cy.get(':nth-child(5) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type('Analista');
        cy.wait(5000);
        //fecha de nacimiento
        cy.get(':nth-child(6) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').click();
        cy.wait(5000);
        //elegir dia, mes ,año
        cy.get('.v-input--is-focused > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('2021-09-06');
        cy.wait(5000);
        //telefnono
        cy.get(':nth-child(7) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').clear().type('996008969');
        cy.wait(5000);
        //direccion
        cy.get(':nth-child(8) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type('Fake direccion');
        cy.wait(5000);
        //select de comuna
        cy.get(':nth-child(9) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
        cy.wait(5000);
        //opcion antofagasta
        cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(1) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click({ force: true });
        cy.wait(5000);
        //select region
        cy.get(':nth-child(10) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
        cy.wait(5000);
        //opcion antofagasta
        cy.get('.menuable__content__active > .v-select-list > .v-list > div.primary--text > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click({ force: true });
        cy.wait(5000);
        //guardar cambios
        cy.get('.lg12 > .layout > .flex > .btn-panel > .v-btn__content').click({ force: true });
        cy.wait(5000);

        //-> editar contraseña<-
        //contraseña actual
        cy.get('.md12 > :nth-child(1) > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('123qwe');
        cy.wait(5000);
        //click eye button
        cy.get('.md12 > :nth-child(1) > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-input__append-inner > .v-input__icon > .v-icon').click();
        cy.wait(5000);
        //contraseña nueva
        cy.get(':nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('123qwe');
        cy.wait(5000);
        //click eye button
        cy.get(':nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-input__append-inner > .v-input__icon > .v-icon').click();
        cy.wait(5000);
        //confirmar contraseña
        cy.get('.md12 > :nth-child(1) > :nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('123qwe');
        cy.wait(5000);
        //click eye button
        cy.get(':nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-input__append-inner > .v-input__icon > .v-icon').click();
        cy.wait(5000);
        //guardar cambios
        cy.get('.md12 > :nth-child(1) > .layout > .flex > .btn-panel > .v-btn__content').click();
        cy.wait(5000);
        //volver
        cy.get('.btn-volver > .v-btn__content').click();
        cy.wait(5000);

        //->editar informacion de contacto<---
        //presionar editar ver si funciona el boton
        cy.get('.elevation-3 > .v-card__title > [style="display: flex; justify-content: space-between; width: 100%;"] > .btn-editar > .v-btn__content > .headline').click();
        cy.wait(5000);
        //volver
        cy.get('.btn-volver > .v-btn__content').click();
        cy.wait(5000);

        //ir a mis empresas
        cy.get(':nth-child(7) > .v-list__tile > .v-list__tile__action').click();
        cy.wait(5000);
        //seleccionar empresa
        cy.get(':nth-child(4) > :nth-child(3) > .btn-seleccionar-select > .v-btn__content').click();
        cy.wait(5000);
        //ir a  mis datos otra vez
        cy.get(':nth-child(6) > .v-list__tile > .v-list__tile__action').click();
        cy.wait(5000);
        //click en pestaña cuentas bancarias
        cy.get(':nth-child(3) > .v-tabs__item').click();
        cy.wait(5000);
        //agregar nueva cuenta
        cy.get('.my-3 > :nth-child(1) > .flex > .btn-panel > .v-btn__content').click();
        cy.wait(5000);
        //select para desplegar bancos
        cy.get('.v-dialog__content--active > .v-dialog > .v-card > .container > .layout > .flex > :nth-child(3) > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
        cy.wait(5000);
        //selecciionar opcion banco estado
        cy.get('.v-menu__content--fixed > .v-select-list > .v-list > :nth-child(3) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
        cy.wait(5000);
        //ingresar numero de cuenta
        cy.get('.v-dialog__content--active > .v-dialog > .v-card > .container > .layout > .flex > :nth-child(4) > .v-input__control > .v-input__slot > .v-text-field__slot').type('555555555555');
        cy.wait(5000);
        //select para desplegar opcion de tipo de cuenta
        cy.get('.v-dialog__content--active > .v-dialog > .v-card > .container > .layout > .flex > :nth-child(5) > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
        cy.wait(5000);
        //seleccionar opcion cuenta vista
        cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(2) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
        cy.wait(5000);
        //ingresar alias
        cy.get('.v-dialog__content--active > .v-dialog > .v-card > .container > .layout > .flex > :nth-child(6) > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('test');
        cy.wait(5000);
        //deseo transferir a otro rut
        cy.get('.v-dialog__content--active > .v-dialog > .v-card > .pb-2 > :nth-child(1) > .v-btn__content').click();
        cy.wait(5000);
        //cerrar ventana emergente
        cy.get('[style="z-index: 204;"] > .v-dialog > .v-card > .btnclose > .v-btn__content').click();
        cy.wait(5000);
        //agregar cuenta(se necesita borrar esa cuenta para que no se almacene)
        cy.get('.pb-2 > :nth-child(2) > .v-btn__content').click();
        cy.wait(5000);
        //buscar 
        cy.get('.xs4 > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('OSCAR');
        cy.wait(5000);
        //editar cuenta
        cy.get(':nth-child(2) > :nth-child(8) > .v-icon').click();
        cy.wait(5000);
        //select de banco para editar
        cy.get('.v-dialog__content--active > .v-dialog > .v-card > .container > .layout > .flex > :nth-child(3) > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
        cy.wait(5000);
        //elegir opcion BANCO DO BRASIL
        cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(6) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
        cy.wait(5000);
        //editar numero de cuenta
        cy.get('.v-dialog__content--active > .v-dialog > .v-card > .container > .layout > .flex > :nth-child(4) > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type('7777777777');
        cy.wait(5000);
        //select tipo de cuenta para editar
        cy.get('.v-dialog__content--active > .v-dialog > .v-card > .container > .layout > .flex > :nth-child(5) > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
        cy.wait(5000);
        //elegir opcion cuenta de ahorro
        cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(3) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
        cy.wait(5000);
        // editar alias
        cy.get('.v-dialog__content--active > .v-dialog > .v-card > .container > .layout > .flex > :nth-child(6) > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type('testeditado');
        cy.wait(5000);
        //presionar editar cuenta
        cy.get('.v-dialog__content--active > .v-dialog > .v-card > .pb-2 > .btn-panel > .v-btn__content').click();
        cy.wait(5000);

    })
    it('Pestaña sii', () => {
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
        //click en mis datos
        cy.get(':nth-child(6) > .v-list__tile > .v-list__tile__action').click({ force: true });
        cy.wait(5000);
        //click en mis empresas
        cy.get(':nth-child(7) > .v-list__tile > .v-list__tile__action').click();
        cy.wait(5000);
        //eledir empresa oscar ignacio ...
        cy.get(':nth-child(4) > :nth-child(3) > .btn-seleccionar-select > .v-btn__content').click();
        cy.wait(5000);
        //volver a mis datos
        cy.get(':nth-child(6) > .v-list__tile > .v-list__tile__action').click();
        cy.wait(5000);
        //->pestaña SII<-
        //seleccionar pestaña sii
        cy.get(':nth-child(4) > .v-tabs__item').click();
        cy.wait(5000);
        //clave de consulta sii boton
        cy.get(':nth-child(2) > .mt-5 > .btn-panel > .v-btn__content').click();
        cy.wait(5000);
        // limpiar y digitar clave sii
        cy.get('.layout > .flex > :nth-child(3) > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type('123456');
        cy.wait(5000);
        //click en eye button
        cy.get(':nth-child(3) > .v-input__control > .v-input__slot > .v-input__append-inner > .v-input__icon > .v-icon').click();
        cy.wait(5000);
        //repetir contraseña
        cy.get('.v-dialog__content--active > .v-dialog > .v-card > .container > .layout > .flex > :nth-child(4) > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type('123456');
        cy.wait(5000);
        //click en eye button
        cy.get(':nth-child(4) > .v-input__control > .v-input__slot > .v-input__append-inner > .v-input__icon > .v-icon').click();
        cy.wait(5000);
        //click en aceptar
        cy.get('.v-dialog__content--active > .v-dialog > .v-card > .pb-2 > .btn-panel > .v-btn__content').click();
        cy.wait(5000);
        //cerrar pestaña
        cy.get('.v-dialog__content--active > .v-dialog > .v-card > .btnclose > .v-btn__content').click();
        cy.wait(5000);
    })
    it('seleccionar trg', () => {
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
        //click en mis datos
        cy.get(':nth-child(6) > .v-list__tile > .v-list__tile__action').click({ force: true });
        cy.wait(5000);
        //click en mis empresas
        cy.get(':nth-child(7) > .v-list__tile > .v-list__tile__action').click();
        cy.wait(5000);
        //eledir empresa oscar ignacio ...
        cy.get(':nth-child(4) > :nth-child(3) > .btn-seleccionar-select > .v-btn__content').click();
        cy.wait(5000);
        //volver a mis datos
        cy.get(':nth-child(6) > .v-list__tile > .v-list__tile__action').click();
        cy.wait(5000);
        //click  en tgr
        cy.get(':nth-child(5) > .v-tabs__item').click();
        cy.wait(5000);
        //select empresa
        cy.get('.pt-3 > .pa-3 > .v-select > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
        cy.wait(5000);
        //ingresar clave trg
        cy.get('.pt-3 > .pa-3 > .mt-2 > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('123456');
        cy.wait(5000);
        //guardar configuración
        cy.get('.layout > .pt-3 > .btn-panel > .v-btn__content').click();
        cy.wait(5000);
    })
    it('previred', () => {
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
        //click en mis datos
        cy.get(':nth-child(6) > .v-list__tile > .v-list__tile__action').click({ force: true });
        cy.wait(5000);
        //click en mis empresas
        cy.get(':nth-child(7) > .v-list__tile > .v-list__tile__action').click();
        cy.wait(5000);
        //eledir empresa oscar ignacio ...
        cy.get(':nth-child(4) > :nth-child(3) > .btn-seleccionar-select > .v-btn__content').click();
        cy.wait(5000);
        //volver a mis datos
        cy.get(':nth-child(6) > .v-list__tile > .v-list__tile__action').click();
        cy.wait(5000);
        //seleccionar pestaña previred
        cy.get(':nth-child(6) > .v-tabs__item').click();
        cy.wait(5000);
        //seleccionar select de empresa
        cy.get(':nth-child(1) > .v-form > .container > .layout > .text-xs-center > .pa-3 > .v-select > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
        cy.wait(5000);
        //ingresar clave previred
        cy.get(':nth-child(1) > .v-form > .container > .layout > .text-xs-center > .pa-3 > :nth-child(2) > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('123456');
        cy.wait(5000);
        //guardar configuracion
        cy.get('.pa-3 > .btn-panel > .v-btn__content').click();
        cy.wait(5000);
    })

    it('notificaciones', () => {
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
        //click en mis datos
        cy.get(':nth-child(6) > .v-list__tile > .v-list__tile__action').click({ force: true });
        cy.wait(5000);
        //click en mis empresas
        cy.get(':nth-child(7) > .v-list__tile > .v-list__tile__action').click();
        cy.wait(5000);
        //eledir empresa oscar ignacio ...
        cy.get(':nth-child(4) > :nth-child(3) > .btn-seleccionar-select > .v-btn__content').click();
        cy.wait(5000);
        //volver a mis datos
        cy.get(':nth-child(6) > .v-list__tile > .v-list__tile__action').click();
        cy.wait(5000);
        //click en notificaciones
        cy.get('[style="margin-right: 35px;"] > .v-tabs__item').click();
        cy.wait(5000);
        //click en desactivar notificaciones por mail
        cy.get(':nth-child(2) > .container > .layout > .xs4 > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
        cy.wait(5000);
        //activar las notificaciones por mail
        cy.get(':nth-child(2) > .container > .layout > .xs4 > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
        cy.wait(5000);
        //activar notificaciones por whatsapp
        cy.get(':nth-child(3) > .container > .layout > .xs4 > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
        cy.wait(5000);
        //descactivar notificaciones por whatsapp
        cy.get(':nth-child(3) > .container > .layout > .xs4 > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
        cy.wait(5000);
        //activar ofertas y novedades
        cy.get(':nth-child(3) > .container > .layout > .xs4 > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
        cy.wait(5000);
        //desactivar ofertas y novedades
        cy.get(':nth-child(3) > .container > .layout > .xs4 > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
        cy.wait(5000);
        //guardar configuracion
        cy.get(':nth-child(1) > .v-form > .white > .fill-height > .text-xs-center.xs12 > .btn-panel > .v-btn__content').click();
        cy.wait(5000);

    })
})