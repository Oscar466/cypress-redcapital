describe('Login test case', function(){
    beforeEach(function(){
        cy.viewport('macbook-13') ;
        cy.visit('https://dev-cl.netlify.app/');
    })
    it('Login user', function(){
        cy.wait(5000);
        cy.get('[style="text-transform: capitalize; height: auto; padding: 5px 17px; background: rgb(236, 107, 28) !important; font-size: 1rem !important;"] > .v-btn__content').click();
        cy.wait(5000);
        cy.get('.justify-center > .container > .layout > :nth-child(1) > .dni-field > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('173222149');
        cy.get('.justify-center > .container > .layout > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('123qwe');
        cy.wait(5000);
        cy.get('.justify-center > .container > .layout > .text-xs-center > .btn-panel > .v-btn__content').click();
    })
})