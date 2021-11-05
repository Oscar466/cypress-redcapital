describe('Token login',()=>{
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
        cy.request(options).its('body').then((response)=>{
            cy.log(response);
            let token = JSON.stringify(response.data.access_token);
            cy.writeFile('C:/cypress-redcapital/fixtures/token.json',{token:token});
            cy.readFile('C:/cypress-redcapital/fixtures/token.json').then((datas)=>{
                cy.log(datas);
            })
        })
        
       /* cy.readFile('C:/cypress-redcapital/cypress/fixtures/testing.json').then((obj)=>{
            obj.id = '123'
            cy.writeFile('C:/cypress-redcapital/cypress/fixtures/testing.json', obj)
           
       })     
       */
         
    })     
})