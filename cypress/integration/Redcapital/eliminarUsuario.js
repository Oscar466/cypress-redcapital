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
        cy.visit('https://dev-cl.netlify.app/');
        cy.get('.v-toolbar__items > [href="/registrar"]').click();
        cy.wait(5000);
        //Nombre y apellido
        cy.get(':nth-child(2) > .dni-field > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('Josefa Herrera');
        //Rut
        cy.get(':nth-child(3) > .dni-field > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('53671349');
        //correo
        cy.get(':nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('josefa@linuxero.cl');
        //contraseña
        cy.get(':nth-child(5) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('Josefaredcapital');
        //Teléfono
        cy.get(':nth-child(6) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('971037286');
        //terminos y condiciones
        cy.get('.v-input--selection-controls__ripple').click();
        //registrar
        cy.get('.pa-4 > .align-center > .flex').click();
        cy.wait(5000);
        //nombre click
        cy.get(':nth-child(8) > .v-btn__content').click();
        //inversionista click
        cy.get('.v-menu__content--fixed > .v-list > :nth-child(1) > .v-list__tile > .v-list__tile__title').click();
    })
})