describe('Crear usuario y hacer el flujo de credito sin garantia',()=>{
    it('Delete solicitud de credito', () => {
        cy.fixture('token').then((respuesta) => {
            var token = respuesta.token;
            return token;
        }).then((datos) => {
            const token = datos;
            const authorization = `bearer ${token}`;
            const options = {
                method: 'POST',
                url: `https://dev.redcapital.cl/api/usuario/testing2`,
                headers: {
                    authorization,
                },
                body: {
                    rut: "18001475-6",
                    codigo: "ASCFrWEAaDRdWE15"
                }
            };
            cy.request(options).then((response) => {
                cy.log(response.status);
            })
        })
    })
    it('Credito sin garantia',()=>{
        cy.visit('https://dev-cl.netlify.app/');
        cy.wait(5000);
        //boton registrar usuario
        cy.get('.v-toolbar__items > [href="/registrar"] > .v-btn__content').click();
        cy.wait(5000);
        //nombre y apellido
        cy.get('.container > :nth-child(1) > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('Andres perez');
        cy.wait(5000);
        //rut
        cy.get(':nth-child(2) > .dni-field > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('180014756');
        cy.wait(5000);
        //email
        cy.get(':nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('test@test.cl');
        cy.wait(5000);
        //contraseña
        cy.get(':nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('L_2569875');
        cy.wait(5000);
        //telefono
        cy.get(':nth-child(5) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('97843623');
        cy.wait(5000);
        //select que desea hacer
        cy.get(':nth-child(6) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
        cy.wait(5000);
        //opción solicitar
        cy.get('.v-select-list > .v-list > :nth-child(2) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
        cy.wait(5000);
        //acepto la politica de privacidad
        cy.get('.v-input--selection-controls__ripple').click();
        cy.wait(5000);
        //registrar
        cy.get(':nth-child(2) > :nth-child(1) > .btn-panel > .v-btn__content').click();
        cy.wait(5000);
        // desplegar opcion panel solicitante
        cy.get(':nth-child(8) > .v-btn__content').click();
        cy.wait(5000);
        //click en opción solicitante
        cy.get('.menuable__content__active > .v-list > :nth-child(1) > .v-list__tile > .v-list__tile__title').click();
        cy.wait(5000);
        //click en sitio solicitante
        cy.get('.btnsitios2 > .v-btn__content > .text-capitalize').click();
        cy.wait(5000);
        //click en creaar empresa
        cy.get('.pt-3 > .btn-panel > .v-btn__content').click();
        cy.wait(5000);
        //cerrar ventana emergente
        cy.get('.v-dialog__content--active > .v-dialog > .v-card > .btnclose > .v-btn__content').click();
        cy.wait(5000);
        //rut empresa
        cy.get('.v-form > [outline=""] > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('764855752');
        cy.wait(5000);
        //direccion empresa
        cy.get(':nth-child(5) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('los aromos test');
        cy.wait(5000);
        //descripción de empresa
        cy.get(':nth-child(6) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('empresa con crecimiento exponencial');
        cy.wait(5000);
        // enviar
        cy.get('.btn-enviar > .v-btn__content').click();
        cy.wait(5000);


        //sitio solicitante
        cy.get('.btnsitio2 > .v-btn__content > .text-capitalize').click();
        cy.wait(5000);
        //cerrar ventana emergete
        cy.get('.v-dialog__content--active > .v-dialog > .v-card > .btnclose').click();
        cy.wait(5000);
        //credito sin garantia
        cy.get(':nth-child(4) > .fresponsive > .v-btn__content').click();
        cy.wait(5000);
        //actualizar nombre
        cy.get('[style=""] > .v-stepper__wrapper > :nth-child(1) > .md11 > .v-form > .align-start > :nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type('Fake Nombre');
        cy.wait(5000);
        //actualizar apellido paterno
        cy.get('[style=""] > .v-stepper__wrapper > :nth-child(1) > .md11 > .v-form > .align-start > :nth-child(6) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type('Fake Apellido Paterno');
        cy.wait(5000);
        //actualizar apeelido materno
        cy.get(':nth-child(8) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type('Fake Apellido Materno');
        cy.wait(5000);
        //seleccionar select de genero
        cy.get('[style=""] > .v-stepper__wrapper > :nth-child(1) > .md11 > .v-form > .align-start > :nth-child(10) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
        cy.wait(5000);
        //elegir opcion masculino
        cy.get('.menuable__content__active > .v-select-list > .v-list > div.primary--text > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click({ force: true });
        cy.wait(5000);
        //seleccionar select estado civil
        cy.get(':nth-child(12) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
        cy.wait(5000);
        //elegir opcion soltero
        cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(5) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
        cy.wait(5000);
        //actualizar telefono
        cy.get('[style=""] > .v-stepper__wrapper > :nth-child(1) > .md11 > .v-form > .align-start > :nth-child(5) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type('996008969');
        cy.wait(5000);
        //actualizar direccion particular
        cy.get(':nth-child(7) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').clear().type('Fake Direccion');
        cy.wait(5000);
        //seleccionar select region
        cy.get('[style=""] > .v-stepper__wrapper > :nth-child(1) > .md11 > .v-form > .align-start > :nth-child(9) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
        cy.wait(5000);
        //elegir opcion antofagasta
        cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(2) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click({ force: true });
        cy.wait(5000);
        //selecionar select comuna
        cy.get(':nth-child(11) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
        cy.wait(5000);
        //elegir opcion puchuncavi
        cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(5) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
        cy.wait(5000);
        //actualizar datos
        cy.get('[style=""] > .v-stepper__wrapper > :nth-child(1) > .md11 > .v-form > .align-center > .flex > .btn-panel > .v-btn__content').click();
        cy.wait(5000);

        //-->paso 2 queremos conocerte<----
        //cuanto vendes al mes ?
        cy.get('[style=""] > .v-stepper__wrapper > :nth-child(1) > .md11 > .v-form > .align-start > .px-3 > :nth-child(1) > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
        cy.wait(5000);
        //seleccionamos entre  y 2 millones
        cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(1) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
        cy.wait(5000);
        //como estan tus ventas con respecto al año anterior?
        cy.get('.px-3 > :nth-child(2) > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
        cy.wait(5000);
        //seleccionamos la opcion aumentaron mis ventas
        cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(2) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click({ force: true });
        cy.wait(5000);
        //el proximo año estimas que ?
        cy.get(':nth-child(3) > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
        cy.wait(5000);
        //seleccionamos opcion mis ventar aumentaran
        cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(1) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
        cy.wait(5000);
        //si tuvieras un credito dispobible por 5 millones que harias?
        cy.get(':nth-child(4) > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
        cy.wait(5000);
        //seleccionamos opcion contratar mas personal para seguir creciendo
        cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(5) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click({ force: true });
        cy.wait(5000);
        //si pudieras dar un credito por el monto que quisieras ¿que monto elegir?
        cy.get(':nth-child(5) > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
        cy.wait(5000);
        //seleccionamos la primera opcion
        cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(1) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
        cy.wait(5000);
        //enviar
        cy.get('[style=""] > .v-stepper__wrapper > :nth-child(1) > .md11 > .v-form > .align-center > .flex').click();
        cy.wait(5000);

        //->crea tu empresa o solicita una existente<-
        cy.get('.layout:nth-child(2) > .flex > div > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > .v-label').click({ force: true });
        cy.wait(5000);
        cy.get('.layout:nth-child(2) > .flex > div > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > .v-label').type('907490009');
        cy.wait(5000);
        //Ventana emergente retomar
       // cy.get('.v-dialog__content--active > .v-dialog > .v-card > .container > .layout > .flex > .separarbtn > .theme--light > .v-btn__content').click();
        //cy.wait(5000);
        
        //cy.get('.v-dialog__content--active > .v-dialog > .v-card > .btnclose').click();
        //cy.wait(5000);
        //telefono de la empresa
        cy.get(':nth-child(2) > :nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('978436188',{force:true});
        cy.wait(5000);
        //direccion empresa
        cy.get(':nth-child(2) > :nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('los aromos test',{force:true});
        cy.wait(5000);
        //cerrar ventana emergente 
        //cy.get('.v-dialog__content--active > .v-dialog > .v-card > .btnclose > .v-btn__content').click();
        //cy.wait(5000);
        //a quien vendes
        cy.get(':nth-child(5) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
        cy.wait(5000);
        //opcion seleccionada empresas
        cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(2) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
        cy.wait(5000);
        //breve descripcion de la empresa
        cy.get(':nth-child(2) > :nth-child(6) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('mediana empresa');
        cy.wait(5000);
        //timepo de experiencia en su rubro o actividad
        cy.get(':nth-child(7) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
        cy.wait(5000);
        //opcion entre 4 y 7 años
        cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(2) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
        cy.wait(5000);
        //tiempo que lleva en su local, oficina o domicilio
        cy.get(':nth-child(8) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
        cy.wait(5000);
        //opcion entre 4 y 7 años
        cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(2) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
        cy.wait(5000);
        //cuanto tiempo dedida el dueño a su negocio semanalmente
        cy.get(':nth-child(2) > :nth-child(9) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
        cy.wait(5000);
        //opcion de lunes a viernes o al menos 5 días a la semana
        cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(2) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
        cy.wait(5000);
        //tienes alguna deuda hoy ?
        cy.get(':nth-child(2) > :nth-child(10) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
        cy.wait(5000);
        //opcion NO
        cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(2) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
        cy.wait(5000);
        //clave sii
        cy.get('[style=""] > .v-stepper__wrapper > :nth-child(1) > .md11 > .v-form > :nth-child(3) > .flex > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
        cy.wait(5000);
        //ingresar clave sii
        cy.get(':nth-child(3) > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('123456');
        cy.wait(5000);
        //eye button enabled
        cy.get(':nth-child(3) > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-input__append-inner > .v-input__icon > .v-icon').click();
        cy.wait(5000);
        //registrar
        cy.get('[style=""] > .v-stepper__wrapper > :nth-child(1) > .md11 > .v-form > :nth-child(4) > .flex').click();
        cy.wait(5000);

        //->solicitud de credito<-
        //empresa o persona que solicitará
        //cy.get(':nth-child(2) > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click({ force: true });
        cy.wait(5000);
        //select monto a solicitar
        cy.get(':nth-child(2) > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click({force:true});
        cy.wait(5000);
        //opcion seleccionada de o a 1.000.000
        cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(1) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
        cy.wait(5000);
        //select destino del crédito
        cy.get(':nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
        cy.wait(5000);
        //opcion seleccionada es contratar mas personal
        cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(5) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
        cy.wait(5000);
        //motivo de la solicitud
        cy.get(':nth-child(2) > :nth-child(5) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('solicitud test');
        cy.wait(5000);
        //enviar solicitud
        cy.get('.flex > .v-card__actions > :nth-child(3) > .v-btn__content').click();
        cy.wait(5000);
        
        //cerrar ventana emergente
        //cy.get('.v-dialog__content--active > .v-dialog > .v-card > .btnclose').click();
        //cy.wait(5000);

       //datos del dueño
       //cual es su relacion con la empresa
       cy.get('[style=""] > .v-stepper__wrapper > :nth-child(1) > .md11 > .v-form > :nth-child(2) > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
       cy.wait(5000);
       //seleccionar trabajador de la empresa
       cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(3) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
       cy.wait(5000);
       //cargo actual en la empresa
       cy.get('[style=""] > .v-stepper__wrapper > :nth-child(1) > .md11 > .v-form > :nth-child(2) > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('comercial');
       cy.wait(5000);
       //cuantos son los dueños de la empresa que tienen mas de un 10%
       cy.get('[style=""] > .v-stepper__wrapper > :nth-child(1) > .md11 > .v-form > :nth-child(2) > :nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
       cy.wait(5000);
       //seleccion 
       cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(2) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
       cy.wait(5000);
       //ok
       cy.get('[style=""] > .v-stepper__wrapper > :nth-child(1) > .md11 > .v-form > .align-center > .flex > .btn-panel > .v-btn__content').click();
       cy.wait(5000);
       //dueño 1
       //nombre
       cy.get('.v-window__container > :nth-child(1) > .v-form > .wrap > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').type('Pedro');
       cy.wait(5000);
       //rut
       cy.get(':nth-child(1) > .v-form > .wrap > :nth-child(3) > .dni-field > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('18312509-8');
       cy.wait(5000);
       //es representante legal
       cy.get('.v-window__container > :nth-child(1) > .v-form > .wrap > :nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
       cy.wait(5000);
       //opcion NO
       cy.get('.menuable__content__active > .v-select-list > .v-list > div.primary--text > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
       cy.wait(5000);
       //propiedad de la vivienda
       cy.get('.v-window__container > :nth-child(1) > .v-form > .wrap > :nth-child(5) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
       cy.wait(5000);
       //opcion arrendada
       cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(2) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
       cy.wait(5000);
       //fecha nacimiento
       cy.get('.v-window__container > :nth-child(1) > .v-form > .wrap > :nth-child(6) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').click();
       cy.wait(5000);
       //estado civil
       cy.get('.v-window__container > :nth-child(1) > .v-form > .wrap > :nth-child(7) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
       cy.wait();


    })

})