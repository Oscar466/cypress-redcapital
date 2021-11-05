
describe('Upload dos', () => {
    it('Upload file', () => {
        cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html');
        cy.get('[type="file"]').attachFile('sampleXml.xml');
        cy.wait(5000);
       // cy.get('[type="submit"]').click();
        //cy.contains("You've uploaded a file. Your notes on the file were:");
    })

})