//import axios from 'axios';
async function EliminacionDeUsuarioTest(){

    try{

        const fetched = await axios.post('https://dev.redcapital.cl/api/usuario/testing2',{
            "rut": "5367134-9",
            "codigo": "ASCFrWEAaDRdWE15"
        });
        return fetched.data;

    }catch(e){
        console.log(e);
    }

}

describe('Register test case', function(){
    beforeEach(function(){
        cy.viewport('macbook-13') ;
        cy.visit('https://dev-cl.netlify.app/fondoemprendedoressolidarios.cl');
    })
    it('Register user',async function(){

        await EliminacionDeUsuarioTest().then(() => {

            /**REGISTRO**/
            //Nombre
            cy.get('.justify-center > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('Josefa');
            //Apellido
            cy.get(':nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('Herrera');
            //Rut
            cy.get(':nth-child(4) > .dni-field > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('53671349');
            //Correo
            cy.get(':nth-child(5) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('josefa@linuxero.cl');
            //Contraseña
            cy.get(':nth-child(6) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('prueba123');
            cy.wait(5000);
            //Repetir Contraseñas
            cy.get(':nth-child(7) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('prueba123');
            cy.wait(5000);
            //Termino y condiciones
            cy.get('.v-input--selection-controls__ripple').click();
            //Boton Registrar
            cy.get(':nth-child(2) > :nth-child(1) > .btn-panel > .v-btn__content').click();
            cy.wait(5000);

            /**Registro Datos PASO 1 **/
            //Teléfono
            cy.get('[style=""] > .v-stepper__wrapper > :nth-child(1) > .md11 > .v-form > .align-start > :nth-child(5) > .v-input > .v-input__control > .v-input__slot').type('971037286');
            //Dirección Particular
            cy.get(':nth-child(7) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').type('Santa Elena 1380');
            //Apellido Materno
            cy.get('[style=""] > .v-stepper__wrapper > :nth-child(1) > .md11 > .v-form > .align-start > :nth-child(8) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('Sepúlveda');
            //Región
            cy.get('[style=""] > .v-stepper__wrapper > :nth-child(1) > .md11 > .v-form > .align-start > :nth-child(9) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
            cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(2) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
            //Género
            cy.get('[style=""] > .v-stepper__wrapper > :nth-child(1) > .md11 > .v-form > .align-start > :nth-child(10) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
            cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(2) > .v-list__tile > .v-list__tile__content').click();
            //Comuna
            cy.get('[style=""] > .v-stepper__wrapper > :nth-child(1) > .md11 > .v-form > .align-start > :nth-child(11) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
            cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(4) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
            //Estado Civil
            cy.get('[style=""] > .v-stepper__wrapper > :nth-child(1) > .md11 > .v-form > .align-start > :nth-child(12) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
            cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(5) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
            //Boton Actualizar Datos
            cy.get('[style=""] > .v-stepper__wrapper > :nth-child(1) > .md11 > .v-form > .align-center > .flex > .btn-panel').click();
            cy.wait(5000);

            /**Crea tu empresa PASO 2 **/
            //Rut Empresa o persona con giro
            cy.get('[style=""] > .v-stepper__wrapper > :nth-child(1) > .md11 > .v-form > :nth-child(2) > :nth-child(1)').type('53671349');
            cy.wait(10000);
            //Nombre Empresa
            cy.get('[style=""] > .v-stepper__wrapper > :nth-child(1) > .md11 > .v-form > :nth-child(2) > :nth-child(2) > .v-input > .v-input__control > .v-input__slot').type('EmpresaPrueba');
            //Teléfono empresa
            cy.get(':nth-child(2) > :nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('971037286');
            //Región
            cy.get('[style=""] > .v-stepper__wrapper > :nth-child(1) > .md11 > .v-form > :nth-child(2) > :nth-child(4) > .v-input > .v-input__control > .v-input__slot').click();
            cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(1) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
            //Comuna
            cy.get('[style=""] > .v-stepper__wrapper > :nth-child(1) > .md11 > .v-form > :nth-child(2) > :nth-child(5) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
            cy.get('.menuable__content__active > .v-select-list > .v-list > div.primary--text > .v-list__tile').click();
            //Dirección Empresa
            cy.get(':nth-child(2) > :nth-child(6) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('Santa Elena 1380');
            //A quiénes vendes
            cy.get(':nth-child(7) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
            cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(1) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
            //Breve Descripción
            cy.get(':nth-child(2) > :nth-child(8) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('Confección Textil');
            //Tiempo de experiencia en su rubro o actividad
            cy.get(':nth-child(2) > :nth-child(9) > .v-input > .v-input__control > .v-input__slot').click();
            cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(4) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
            //Tiempo que lleva en su local, oficina o domicilio
            cy.get(':nth-child(2) > :nth-child(10) > .v-input > .v-input__control > .v-input__slot').click();
            cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(2) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
            //cuanto tiempo dedica el dueño a su negiocio semanalmente
            cy.get(':nth-child(2) > :nth-child(11) > .v-input > .v-input__control > .v-input__slot').click();
            cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(2) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
            //tiene alguna deuda hoy
            cy.get(':nth-child(2) > :nth-child(12) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
            cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(2) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
            //cantidad de trabajadores
            cy.get(':nth-child(13) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('10');
            cy.get(':nth-child(14) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
            cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(1) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
            //Boton Registrar 
            cy.get('[style=""] > .v-stepper__wrapper > :nth-child(1) > .md11 > .v-form > .align-center > .flex > .btn-panel > .v-btn__content').click();
            cy.wait(5000);
            
            /*Solicitud de Crédito PASO 3*/
            //cual sería el monto ideal de financiamiento
            cy.get(':nth-child(2) > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
            cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(3) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
            //En qué tiene pensado invertir el dinero?...
            cy.get('[style=""] > .v-stepper__wrapper > :nth-child(1) > .md11 > .v-form > :nth-child(2) > :nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
            cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(5) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
            //Este financiamiento me permitirá
            cy.get('[style=""] > .v-stepper__wrapper > :nth-child(1) > .md11 > .v-form > :nth-child(2) > :nth-child(5) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
            cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(2) > .v-list__tile > .v-list__tile__content').click();
            //Boton enviar solicitud
            cy.get('.v-form > :nth-child(4) > .flex').click();
            cy.wait(5000);

            /*Datos del dueño de la empresa*/
            //Cual es su relacion con la empresa
            cy.get('[style=""] > .v-stepper__wrapper > :nth-child(1) > .md11 > .v-form > :nth-child(2) > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
            cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(1) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
            //cuantos son los dueños de la empresa que tienen más de un 10%
            cy.get('[style=""] > .v-stepper__wrapper > :nth-child(1) > .md11 > .v-form > :nth-child(2) > :nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
            cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(2) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
            //Boton Ok
            cy.get('[style=""] > .v-stepper__wrapper > :nth-child(1) > .md11 > .v-form > .align-center > .flex').click();
            cy.wait(5000);

            /*Datos Dueños*/
            /*Dueño 1*/
            //propiedad de la vivienda
            cy.get('.v-window__container > :nth-child(1) > .v-form > .wrap > :nth-child(5) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
            cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(2) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
            //Estado civil
            cy.get('.v-window__container > :nth-child(1) > .v-form > .wrap > :nth-child(7) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
            cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(5) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
            //Fecha Nacimiento
            cy.get('.v-window__container > :nth-child(1) > .v-form > .wrap > .inputAnglo-margin.md6 > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').click();
            cy.get('.v-input--is-focused > .v-input__control > .v-input__slot > .v-text-field__slot > input').click()
            cy.get('.v-input--is-focused > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('1995-07-03');
            //Proximo
            cy.get(':nth-child(1) > .v-form > .v-card__actions > .btn-proximo_referidos > .v-btn__content').click();
            /*Dueño 2*/
            //Nombre
            cy.get('[style=""] > .v-form > .wrap > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('Sebastian');
            //Rut Personal
            cy.get('[style=""] > .v-form > .wrap > :nth-child(3) > .dni-field > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('7084645-4');
            //representante legal
            cy.get('div[style=""] > .v-form > .wrap > :nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
            cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(1) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
            //Propiedad de la vivienda
            cy.get('[style=""] > .v-form > .wrap > :nth-child(5) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
            cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(1) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
            //Estado civil
            cy.get('[style=""] > .v-form > .wrap > :nth-child(7) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
            cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(5) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
            //Fecha de nacimiento
            cy.get('[style=""] > .v-form > .wrap > .inputAnglo-margin.md6 > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').click();
            cy.get('[style=""] > .v-form > .wrap > .inputAnglo-margin.md6 > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('1986-07-03');
            //enviar
            cy.get('div[style=""] > :nth-child(2) > .flex > .btn-panel > .v-btn__content').click();
            cy.wait(5000);
            //referidos - agregar más tarde
            cy.get(':nth-child(2) > .layout > :nth-child(2) > .btn-panel').click();
            //encuesta close
            cy.get('.v-dialog__content--active > .v-dialog > .v-card > .btnclose').click();
            //ir al inicio
            cy.get('[style=""] > .v-stepper__wrapper > :nth-child(1) > .md11 > .v-form > .align-center > :nth-child(1) > .btn-panel > .v-btn__content').click();

        });
    })
})