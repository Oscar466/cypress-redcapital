describe('TestBanner',()=>{
    beforeEach(()=>{
        cy.viewport('macbook-13');
        cy.visit('/');
    })
    it('testing register link',()=>{
        cy.wait(7000);
        cy.fixture('banner').then((data)=>{
            cy.get(data.registrarBann);
            cy.wait(7000);
            //cy.get(data.registrarBann).click;
        })
    })
    it('testing invertir link',()=>{
        cy.wait(7000);
        cy.fixture('banner').then((data)=>{
            cy.get(data.invertirBann).click;
        })
    })
    it('testing porque redcapital link',()=>{
        cy.wait(5000);
        cy.fixture('banner').then((data)=>{
            cy.get(data.porqueRedcapitalBann).click();
        })
    })
    it('quienes somos',()=>{
        cy.wait(7000);
        cy.fixture('banner').then((data)=>{
            cy.get(data.quienesSomos).click();
        })
    })
})