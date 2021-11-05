describe('Crear empresas', () => {
    it('Rescatar token', () => {
        const options = {
            method: 'POST',
            url: `https://dev.redcapital.cl/api/login`,
            body: {
                rut: "17322214-9",
                password: "123qwe",
                remember_me: 1
            }
        }
        cy.request(options).its('body').then((response) => {
            //cy.log(response);
            let token = JSON.stringify(response.data.access_token);
            cy.wrap(token).then((data) => {
                const token = data;
                const authorization = `bearer ${token}`;
                const options = {
                    method: 'POST',
                    url: `https://dev.redcapital.cl/api/usuario/testing3`,
                    headers: {
                        authorization,
                    },
                    body: {
                        rut: "76485575-2",
                        codigo: "ASCFrWEAaDRdWE1566zZsYx"
                    }
                };
                cy.request(options).then((response) => {
                    cy.log(response.body.msg);
                    expect(response.status).to.eq(200)
                    expect(response.body).to.have.property('msg', 'Se ha compleado el ciclo de prueba con exito!')
                })
            })
        })

        /* cy.readFile('C:/cypress-redcapital/cypress/fixtures/testing.json').then((obj)=>{
             obj.id = '123'
             cy.writeFile('C:/cypress-redcapital/cypress/fixtures/testing.json', obj)
            
        })     
        */

    })
    beforeEach(function(){
        cy.viewport('macbook-13') ;
        cy.visit('https://dev-cl.netlify.app/');
    })
    it('Sitio solicitante panel "mi panel->credito garantia-> crear empresa"', () => {
       // cy.visit('https://dev-cl.netlify.app/');
        cy.credencialesLoginSitioSolicitante("173222149", "123qwe");
        //presionar crear empresa
        cy.get('.mt-3 > .btn-panel > .v-btn__content').click();
        cy.wait(5000);
        //cerrar ventana emergente
        cy.get('.v-dialog__content--active > .v-dialog > .v-card > .btnclose > .v-btn__content').click();
        cy.wait(5000);
        //rut empresa
        cy.get('.v-form > [outline=""] > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').type('764855752');
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