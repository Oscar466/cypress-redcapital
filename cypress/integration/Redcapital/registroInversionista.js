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
    it('Register user', function(){
        await EliminacionDeUsuarioTest().then(()=>{
            cy.visit('https://dev-cl.netlify.app/');
            //cy.get('.v-toolbar__items > [href="/registrar"]').click();
            cy.wait(5000);
            //barra lateral
            cy.get('.ml-auto > .v-btn__content > .v-icon').click();
            cy.wait(5000);
            //crear cuenta
            cy.get(':nth-child(8) > .v-list__tile > .v-list__tile__title').click();
            cy.wait(5000);
            //Nombre y apellido
            cy.get('.container > :nth-child(1) > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').type('Josefa Herrera');
            //Rut
            cy.get(':nth-child(2) > .dni-field > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').type('53671349');
            //correo
            cy.get(':nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').type('josefa@linuxero.cl');
            //contraseña
            cy.get(':nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').type('Josefaredcapital');
            //Teléfono
            cy.get(':nth-child(5) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').type('971037286');
            //tipo de operacion (invertir o solicitar)
            cy.get(":nth-child(6) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections").click();
            //seleccionar solicitar
            cy.get(".v-select-list > .v-list > :nth-child(2) > .v-list__tile > .v-list__tile__content").click();
            //terminos y condiciones
            cy.get('.v-input--selection-controls__ripple').click();
            //registrar
            cy.get(':nth-child(2) > :nth-child(1) > .btn-panel').click();
            cy.wait(5000);
        })
       
    })
})