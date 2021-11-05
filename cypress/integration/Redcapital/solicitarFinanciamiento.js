async function EliminacionDeEmpresaTest(){
    try{
        const fetched = await axios.post('https://dev.redcapital.cl/api/usuario/testing3',{
            "rut": "76424135-5",
            "codigo": "ASCFrWEAaDRdWE1566zZsYx"
        });
        return fetched.data;    
    }catch(e){
        console.log(e);
    }
}

describe('Testing flujo "solicitar financiamiento"',()=>{
    beforeEach(()=>{
        cy.viewport('macbook-13') ;
        cy.visit('https://dev-cl.netlify.app/');
         
    })
   /*it('Sitio solicitante panel "mi panel->credito garantia-> crear empresa"',()=>{
        cy.credencialesLoginSitioSolicitante("173222149","123qwe");
        //presionar crear empresa
        cy.get('.mt-3 > .btn-panel > .v-btn__content').click();
        cy.wait(5000);
        //cerrar ventana emergente
        cy.get('.v-dialog__content--active > .v-dialog > .v-card > .btnclose > .v-btn__content').click();
        cy.wait(5000);
        //rut empresa
        cy.get('.v-form > [outline=""] > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').type('764241355');
        cy.wait(5000);
        //direccion empresa
        cy.get(':nth-child(5) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').type('las condes');
        cy.wait(5000);
        //descripción breve
        cy.get(':nth-child(6) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').type('mediana empresa');
        cy.wait(5000);
        //enviar
        cy.get('.elevation-3 > :nth-child(2)').click();
        cy.wait(5000);
    })
    */
    
   it('Sitio solicitante panel "mi panel->credito con garantia->editar"',()=>{
       cy.credencialesLoginSitioSolicitante("173222149","123qwe");
        //seleccionar empresa
        cy.get('.md8 > .v-input > .v-input__control > .v-input__slot > .v-select__slot').click();
        cy.wait(5000);
        cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(3) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
        cy.wait(5000);
        //presionar editar
        cy.get('.mb-5 > .container > .layout > :nth-child(3) > .btn-panel > .v-btn__content').click();
        cy.wait(5000);
        //modificar direccion
        cy.get(':nth-child(6) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type('el bosque');
        cy.wait(5000);
        //modificar telefono
        cy.get(':nth-child(7) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type(99784965);
        cy.wait(5000);
        //seleccionar pais
        cy.get(':nth-child(8) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
        cy.wait(5000);
        cy.get('.menuable__content__active > .v-select-list > .v-list > div.primary--text > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
        cy.wait(5000);
        //modificar email
        cy.get(':nth-child(9) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type('test@test.cl');
        cy.wait(5000);
        //modificar comuna
        cy.get(':nth-child(10) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon').click();
        cy.wait(5000);
        cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(1) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
        //modificar a quien vendes
        cy.get(':nth-child(11) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
        cy.wait(5000);
        cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(1) > .v-list__tile > .v-list__tile__content').click();
        cy.wait(5000);
        //modificar region
        cy.get(':nth-child(12) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
        cy.wait(5000);
        cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(2) > .v-list__tile > .v-list__tile__content').click();
        cy.wait(5000);
        //modificar pagina web
        cy.get(':nth-child(13) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type('www.test.cl');
        cy.wait(5000);
        //sintesis empresa
        cy.get(':nth-child(14) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type('buena empresa');
        cy.wait(5000);
        //modificar comentario generel
        cy.get('textarea').clear().type('empresa mediana con crecimiento');
        cy.wait(5000);
        //clave sii
        cy.get(':nth-child(16) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type('123456');
        cy.wait(5000);
        //click en eye button para ver password
        cy.get(':nth-child(16) > .v-input > .v-input__control > .v-input__slot > .v-input__append-inner > .v-input__icon > .v-icon').click();
        cy.wait(5000);
        //guardar cambios
        cy.get('.lg12 > .layout > .flex').click();
        cy.wait(5000);
   })
   
   it('Solicitar credito con garantía',()=>{
    cy.credencialesLoginSitioSolicitante("173222149","123qwe");
    cy.get('.btn-solicitar').click();
    cy.wait(5000);
    cy.get('.menuable__content__active > .v-list > :nth-child(2) > .v-list__tile > .v-list__tile__title').click();
    cy.wait(5000);
    cy.get('.pa-3 > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
    cy.wait(5000);
    cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(2) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
    cy.wait(5000);
    cy.get('.v-form > :nth-child(3)').clear().type(1000000);
    cy.wait(5000);
    //grantia
    cy.get(':nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
    cy.wait(5000);
    cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(3) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
    //valor garantia
    cy.get('.v-form > :nth-child(5)').clear().type(25000);
    cy.wait(5000);
    //deuda garantia
    cy.get(':nth-child(6) > [outline=""] > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').clear().type(150000);
    cy.wait(5000);
    //plazo en meses
    cy.get(':nth-child(7) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').type(12);
    cy.wait(5000);
    //motivo de la solicitud
    cy.get(':nth-child(8) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('necesito fondos');
    cy.wait(5000);
    //enviar solicitud
    cy.get('.v-form > .align-center > .flex').click();
   })
   
   //Es anticipar facturas
   it('Solicitar credito (Factoring)',()=>{
    cy.credencialesLoginSitioSolicitante("173222149","123qwe");
    //presionar boton solicitar
    cy.get('.btn-solicitar > .v-btn__content').click();
    cy.wait(5000);
    //elección factoring
    cy.get('.menuable__content__active > .v-list > :nth-child(1) > .v-list__tile > .v-list__tile__title').click();
    cy.wait(5000);
    //empresa que se desea vincular
    cy.get('.flex > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
    cy.wait(5000);
    cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(2) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
    cy.wait(5000);
    //digitar contraseña sii
    cy.get(':nth-child(2) > .v-input__control > .v-input__slot > .v-text-field__slot').type('123456');
    cy.wait(5000);
    //omitir
    cy.get('.md2 > .btn-panel > .v-btn__content').click();
    cy.wait(5000);
   }) 

  /*it('Solicitar credito (credito sin garantía)',()=>{
    cy.credencialesLoginSitioSolicitante("173222149","123qwe");
    //presionar boton solicitar
    cy.get('.btn-solicitar > .v-btn__content').click();
    cy.wait(5000);
    //eleccion credito sin garantia
    cy.get('.menuable__content__active > .v-list > :nth-child(4) > .v-list__tile > .v-list__tile__title').click();
    cy.wait(5000);
    //cerrar ventana emergente
    cy.get('.v-dialog__content--active > .v-dialog > .v-card > .btnclose > .v-btn__content').click();
    cy.wait(5000);
    //limpiar e escribir el nombre de la empresa en input
    cy.get(':nth-child(2) > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear({force:true}).type('CENTRO DE SERVICIOS COMPARTIDOS BANMEDICA SPA',{force:true});
    cy.wait(5000);
    //limpiar y reescribir el numero en input
    cy.get(':nth-child(2) > :nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type('56996008969');
    cy.wait(5000);
    //limpiar y reescribir la direccion en input empresa
    cy.get(':nth-child(2) > :nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type('ds');
    cy.wait(5000);
    //seleccionar a quien vendes
    cy.get(':nth-child(5) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
    cy.wait(5000);
    //seleccionar opción empresa
    cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(2) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
    cy.wait(5000);
    //breve descripcion de la empresa
    cy.get(':nth-child(2) > :nth-child(6) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type('dd');
    cy.wait(5000);
    //seleccionar tiempo de experiencia en el rubro
    cy.get(':nth-child(7) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
    cy.wait(5000);
    //seleccionar opción entre 4 y 7 años
    cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(2) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
    cy.wait(5000);
    //seleccionar tiempo que lleva en su local
    cy.get(':nth-child(8) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
    cy.wait(5000);
    //seleccionar opción menos de 3 años
    cy.get('.menuable__content__active > .v-select-list > .v-list > div.primary--text > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
    cy.wait(5000);
    //select tiempo que dedica el dueño a su negocio
    cy.get(':nth-child(2) > :nth-child(9) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
    cy.wait(5000);
    //seleccionar opcion total de domingo a domingo
    cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(1) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
    cy.wait(5000);
    //select de tiene alguna deuda hoy
    cy.get(':nth-child(2) > :nth-child(10) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
    cy.wait(5000);
    //seleccionar opcion no
    cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(2) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
    cy.wait(5000);
    //marcar check de clave sii
    cy.get('[style=""] > .v-stepper__wrapper > :nth-child(1) > .md11 > .v-form > :nth-child(3) > .flex > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
    cy.wait(5000);
    //actualizar
    cy.get('[style=""] > .v-stepper__wrapper > :nth-child(1) > .md11 > .v-form > :nth-child(4) > .flex').click();
    cy.wait(5000);
   })
   */

   
})