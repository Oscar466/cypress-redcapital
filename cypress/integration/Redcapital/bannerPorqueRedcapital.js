

describe('Testeo a opciones del banner ¿por que redcapital?', () => {
    beforeEach(() => {
        cy.viewport('macbook-13');
        cy.visit('https://dev-cl.netlify.app/');
    })
    it('Testing a quienes somos', () => {
         //quienes somos
         cy.get('.v-toolbar > .v-toolbar__content > .v-toolbar__items > .ml-0:nth-child(7) > .v-btn__content').click();
         cy.wait(5000);
         cy.get('.v-menu__content > .v-list > .text-uppercase >[href="/quienes-somos"]').should('have.prop','href')
         .then((data)=>{cy.visit(data);});
         cy.wait(5000);
         //click a linkedin g anania
         cy.get(':nth-child(1) > .rc-about_card > .v-card__title > a').click({ force: true });
         cy.wait(5000);
         //click a linkedin felipe 
         cy.get(':nth-child(2) > .rc-about_card > .v-card__title > a').click({ force: true });
         cy.wait(5000);
         //click a linkedin raul
         cy.get(':nth-child(3) > .rc-about_card > .v-card__title > a').click({ force: true });
         cy.wait(5000);
         //click a likedin anibal pinto
         cy.get(':nth-child(4) > .rc-about_card > .v-card__title > a').click({ force: true });
         cy.wait(5000);
        
    })
     
    it('Testear testimonio', () => {
        cy.get('.v-toolbar > .v-toolbar__content > .v-toolbar__items > .ml-0:nth-child(3) > .v-btn__content').click();
        cy.wait(5000);
        //ingresar a testimonios
        cy.get('.v-menu__content > .v-list > .text-uppercase:nth-child(2) > [href="/quienes-somos#testimonios"]').should('have.prop','href')
        .then((data)=>{cy.visit(data);});
        cy.wait(5000);
        //leer hisoria jose antonio otero
        cy.get('.pt-5 > :nth-child(1) > .elevation-3 > .v-card__text > .layout > .hero-card-btn > .rc-button_prim > .v-btn__content').click();
        cy.wait(5000);        
        //solicitar desde jose antonio
        cy.get(':nth-child(3) > .layout > .flex > .btn-panel > .v-btn__content').contains('Solicitar').click();
        cy.wait(5000);
        //reingresar a testimonios
        cy.get('.v-menu__content > .v-list > .text-uppercase:nth-child(2) > [href="/quienes-somos#testimonios"]').should('have.prop','href')
        .then((data)=>{cy.visit(data);});
        cy.wait(5000);
        //leer testimonio marcela osorio
        cy.get('.pt-5 > :nth-child(2) > .elevation-3 > .v-card__text > .layout > .hero-card-btn > .rc-button_prim > .v-btn__content').click();
        cy.wait(5000);
        //solicitar desde marcela osorio
        cy.get(':nth-child(3) > .layout > .flex > .btn-panel > .v-btn__content').click();
        cy.wait(5000);
        
    })
    
    it('Testing a prensa', () => {
        //click a la pestaña Nosotros
        cy.get(':nth-child(7) > .v-btn__content').click();
        cy.wait(5000);
        //click a "prensa"
        cy.get('.v-menu__content > .v-list > .text-uppercase:nth-child(3) > [href="/prensa"]').should('have.prop','href')
        .then((data)=>{cy.visit(data);});
        cy.wait(5000);
        //click a enlace SOYTV
        cy.get(':nth-child(1) > .container > .layout > .btn-go-where-the-endermans-lives > .flex > .text-capitalize > .v-btn__content').click();
        cy.wait(5000);
        //click a diarioEstrategia
        cy.get(':nth-child(2) > .container > .layout > .btn-go-where-the-endermans-lives > .flex > .text-capitalize > .v-btn__content').click();
        cy.wait(5000);
        //click a DF.cl
        cy.get(':nth-child(3) > .container > .layout > .btn-go-where-the-endermans-lives > .flex > .text-capitalize > .v-btn__content').click();
        cy.wait(5000);
        //click a diaroEstrategia-> Crowfunding entrevista
        cy.get(':nth-child(3) > .container > .layout > .btn-go-where-the-endermans-lives > .flex > .text-capitalize > .v-btn__content').click();
        cy.wait(5000);
        //click a el mercurio
        cy.get(':nth-child(5) > .container > .layout > .btn-go-where-the-endermans-lives > .flex > .text-capitalize > .v-btn__content').click();
        cy.wait(5000);
        //click LTpuslo
        cy.get(':nth-child(6) > .container > .layout > .btn-go-where-the-endermans-lives > .flex > .text-capitalize > .v-btn__content').click();
        cy.wait(5000);
        //click a DF.cl -> la oportunidad del fondo crece
        cy.get(':nth-child(6) > .container > .layout > .btn-go-where-the-endermans-lives > .flex > .text-capitalize > .v-btn__content').click();
        cy.wait(5000);
        //click a ELLIBRERO
        cy.get(':nth-child(9) > .container > .layout > .btn-go-where-the-endermans-lives > .flex > .text-capitalize > .v-btn__content').click();
        cy.wait(5000);
        //click a DF.cl->El casting "banco estado"para modernizar el banco  atraves de fintech
        cy.get(':nth-child(10) > .container > .layout > .btn-go-where-the-endermans-lives > .flex > .text-capitalize > .v-btn__content').click();
        cy.wait(5000);
        //click a DiarioEstrategia->"crowfunding una alternativa para quienes deciden retirar su 10%..."
        cy.get(':nth-child(11) > .container > .layout > .btn-go-where-the-endermans-lives > .flex > .text-capitalize > .v-btn__content').click();
        cy.wait(5000);
        //click el mercurio -> entes financieros activan asesorias y bancos...
        cy.get(':nth-child(12) > .container > .layout > .btn-go-where-the-endermans-lives > .flex > .text-capitalize > .v-btn__content').click();
        cy.wait(5000);
        //click a chilevision emprender y reinventarse
        cy.get(':nth-child(13) > .container > .layout > .btn-go-where-the-endermans-lives > .flex > .text-capitalize > .v-btn__content').click();
        cy.wait(5000);
        //click en enlace terra "guías para las pymes"
        cy.get(':nth-child(14) > .container > .layout > .btn-go-where-the-endermans-lives > .flex > .text-capitalize > .v-btn__content').click();
        cy.wait(5000);
        //click enlace diarioEstrategia "transformacion digital y pymes: nunca es tarde"
        cy.get(':nth-child(15) > .container > .layout > .btn-go-where-the-endermans-lives > .flex > .text-capitalize > .v-btn__content').click();
        cy.wait(5000);
        //click LTpulso "nuevas pymes llegan a los factoring frente a mayor liquidez inmediata"
        cy.get(':nth-child(16) > .container > .layout > .btn-go-where-the-endermans-lives > .flex > .text-capitalize > .v-btn__content').click();
        cy.wait(5000);
        //click enlace LTpulso "Startups navegando bajo pandemia"
        cy.get(':nth-child(17) > .container > .layout > .btn-go-where-the-endermans-lives > .flex > .text-capitalize > .v-btn__content').click();
        cy.wait(5000);
        //click LTlatercera "STARTUPS navegando bajo pandemia
        cy.get(':nth-child(18) > .container > .layout > .btn-go-where-the-endermans-lives > .flex > .text-capitalize > .v-btn__content').click();
        cy.wait(5000);
        //click LTlatercera "regulacion y rol de las fintech en chile"
        cy.get(':nth-child(19) > .container > .layout > .btn-go-where-the-endermans-lives > .flex > .text-capitalize > .v-btn__content').click();
        cy.wait(5000);
        //click en cooperativa.cl "entrevista enta edición... "
        cy.get(':nth-child(20) > .container > .layout > .btn-go-where-the-endermans-lives > .flex > .text-capitalize > .v-btn__content').click();
        cy.wait(5000);
        //click cooperativa.cl "entrevista en 2da edición..."
        cy.get(':nth-child(21) > .container > .layout > .btn-go-where-the-endermans-lives > .flex > .text-capitalize > .v-btn__content').click();
        cy.wait(5000);
        //click en cooperativa.cl "gremios estiman cerca de 200 mil pymes desaparecerán tras la pandemia.."
        cy.get(':nth-child(22) > .container > .layout > .btn-go-where-the-endermans-lives > .flex > .text-capitalize > .v-btn__content').click();
        cy.wait(5000);
        //click en m "dia de la pyme: las principales ayudas apuntan a .."
        cy.get(':nth-child(22) > .container > .layout > .btn-go-where-the-endermans-lives > .flex > .text-capitalize > .v-btn__content').click();
        cy.wait(5000);
        //click en 42Diario estrategia "informe radar pyme en pandemia:principales ayudas.."
        cy.get(':nth-child(24) > .container > .layout > .btn-go-where-the-endermans-lives > .flex > .text-capitalize > .v-btn__content').click();
        cy.wait(5000);
        //click bio bio chile "crowfunding: una alternativa para las pymes que no han podido acceder a beneficios estatales"
        cy.get(':nth-child(25) > .container > .layout > .btn-go-where-the-endermans-lives > .flex > .text-capitalize > .v-btn__content').click();
        cy.wait(5000);
        //click 42Diario la estrategia "atencion pymes: 5 consejos para entender y acceder al financiamiento colectivo"
        cy.get(':nth-child(26) > .container > .layout > .btn-go-where-the-endermans-lives > .flex > .text-capitalize > .v-btn__content').click();
        cy.wait(5000);
        //click LTpulso "oportunidades para invertir en renta fija a corto plazo y con excelentes rentabilidades"
        cy.get(':nth-child(27) > .container > .layout > .btn-go-where-the-endermans-lives > .flex > .text-capitalize > .v-btn__content').click();
        cy.wait(5000);
        //click DF.cl "redcapital crece 30% en primer trimestre pese a los impactos de la crisis"
        cy.get(':nth-child(28) > .container > .layout > .btn-go-where-the-endermans-lives > .flex > .text-capitalize > .v-btn__content').click();
        cy.wait(5000);
        //click 42 diario la estrategia "efectos covid-19 y urgencia liquidez"
        cy.get(':nth-child(30) > .container > .layout > .btn-go-where-the-endermans-lives > .flex > .text-capitalize > .v-btn__content').click();
        cy.wait(5000);
        //click ELLIBRERO "fintech y su capacidad de otorgar liquidez a las pymes"
        cy.get(':nth-child(31) > .container > .layout > .btn-go-where-the-endermans-lives > .flex > .text-capitalize > .v-btn__content').click();
        cy.wait(5000);
        //click LTlatercera "corfo prevee llegar a 40.000 pymes con fondo crece que dara liquidez..."
        cy.get(':nth-child(32) > .container > .layout > .btn-go-where-the-endermans-lives > .flex > .text-capitalize > .v-btn__content').click();
        cy.wait(5000);
        //click DF.cl "la ayuda para las pyme no es suficiente"
        cy.get(':nth-child(32) > .container > .layout > .btn-go-where-the-endermans-lives > .flex > .text-capitalize > .v-btn__content').click();
        cy.wait(5000);
    })


})