// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//-->Funcion registrar<---
Cypress.Commands.add('generarRegistro',(nombre,rut,email,password,telefono)=>{
    cy.fixture('registro').then((data) => {
        cy.get(data.registrar).click();
        cy.get(data.nombreApellido).type(nombre);
        cy.get(data.rut).type(rut);
        cy.get(data.email).type(email);
        cy.get(data.contrasena).type(password);
        cy.get(data.telefono).type(telefono);
        cy.get(data.tipoOperacion).click();
        cy.get(data.selectSolicitar).click();
        cy.get(data.checkAceptar).click();
        cy.get(data.btnIngresar).click(); 
        cy.get(data.linkSiyaTienesCuenta).click();
    });
})
//->Credenciales login<-
Cypress.Commands.add('credencialesLogin',(username,password)=>{
    cy.fixture('ingreso').then((data) => {
        cy.get(data.logear).click();
        cy.get(data.nombre).type(username);
        cy.get(data.pass).type(password);
        cy.get(data.verPass).click();
        cy.get(data.verPass).click();
       // cy.get(data.olvidatesContrasenia).click();
        //cy.get(data.registrarLink).click();
        cy.get(data.entrar).click();
    });
})
// login para sitio solicitante
Cypress.Commands.add('credencialesLoginSitioSolicitante',(rut,pass)=>{
    cy.wait(5000);
    //Presionar boton solicitar financiamiento en el banner
    cy.get('.v-toolbar__items > [href="/solicitar"] > .v-btn__content').click();
    cy.wait(5000);
    //Presionar boton en solicitar financimiento para iniciar luego sesion
    cy.get('[style="background: inherit; margin-top: 0rem;"] > .hero-card-btn > .ma-0').click();
    //Digitar rut
    cy.wait(5000);
    cy.get('.justify-center > .container > .layout > :nth-child(1) > .dni-field > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type(rut);
    //Digitar password
    cy.get('.justify-center > .container > .layout > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type(pass);
    //presionar eye button para ver el pass
    cy.wait(5000);
    cy.get('.justify-center > .container > .layout > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-input__append-inner > .v-input__icon > .v-icon').click();
    //ingresar
    cy.wait(5000);
    cy.get('.justify-center > .container > .layout > .text-xs-center').click();
    //presionar sitio solicitante
    cy.wait(5000);
    cy.get('.layout > .flex > .ma-0:nth-child(1) > .v-btn__content > .text-capitalize').click({force:true}); 
    //cerrar ventana emergente
    cy.wait(5000);
    cy.get('.v-dialog__content--active > .v-dialog > .v-card > .btnclose > .v-btn__content').click();
    //presionar credito garantias
    cy.wait(5000);
    cy.get(':nth-child(3) > .fresponsive > .v-btn__content').click();
   
})