
describe('Testeo de token',()=>{
    it('testing',()=>{
        cy.fixture('token').then((result)=>{
            cy.log(result.token);
        })

    })
})