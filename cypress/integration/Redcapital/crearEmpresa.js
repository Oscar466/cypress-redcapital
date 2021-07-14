
const hola = async function EliminacionDeEmpresaTest(){
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
hola();

describe('saddaads',()=>{
    it('Sitio solicitante panel "mi panel->credito garantia-> crear empresa"',()=>{
        cy.visit('https://dev-cl.netlify.app/');
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
})
