describe('Test banner "ayuda"',()=>{
    beforeEach(()=>{
        cy.viewport('macbook-13');
        cy.visit('https://dev-cl.netlify.app/');
    })
    it('testing ayuda',()=>{
        //ingresar a ayuda
        cy.get(':nth-child(5) > .v-btn__content').click();
        cy.wait(5000);
        //ingresar a preguntas frecuentes
        cy.get('.v-menu__content:nth-child(1) > .v-list > .text-uppercase:nth-child(1) > .v-list__tile > .v-list__tile__title').click({force:true});
        cy.wait(5000);
        //abrir primera transferencia
        cy.get(':nth-child(1) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿cuando publican nuevos proyectos?
        cy.get(':nth-child(2) > .v-expansion-panel__header > .body-2').click();
        //He transferido el monto de la inversión, pero aún se encuentra pendiente" < de 24 horas
        cy.get(':nth-child(3) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //He transferido el monto de la inversión, pero aún se encuentra pendiente" > de 24 horas
        cy.get(':nth-child(4) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Cómo lo hago para declarar mis ganancias a SII como persona natural?
        cy.get(':nth-child(5) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Cómo lo hago para declarar mis ganancias a SII como sociedad de inversión/ empresa?
        cy.get(':nth-child(6) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Cuáles son los pasos para invertir en RedCapital?
        cy.get(':nth-child(7) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Cuáles son los requisitos para invertir en RedCapital?
        cy.get(':nth-child(8) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Cuáles son los costos por invertir en RedCapital?
        cy.get(':nth-child(9) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Por qué se requiere anticipar dinero si participo en una adjudicación?
        cy.get(':nth-child(10) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Cuánto debo esperar desde que elijo invertir en un proyecto hasta que se adjudica?
        cy.get(':nth-child(11) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Cuánto puedo ganar al invertir en RedCapital?
        cy.get(':nth-child(12) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Qué pasa si la empresa en la que invertí deja de pagar?
        cy.get(':nth-child(13) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Qué es una SGR?
        cy.get(':nth-child(14) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿En qué consiste los créditos con Factura?
        cy.get(':nth-child(15) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Si participo en un remate que no me adjudico: ¿Tiene algún costo?
        cy.get(':nth-child(16) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Cuáles son los pasos para solicitar un crédito en RedCapital?
        cy.get(':nth-child(17) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Cuáles son los requisitos para solicitar un crédito en RedCapital?
        cy.get(':nth-child(18) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Cuál es el beneficio al solicitar un crédito en RedCapital?
        cy.get(':nth-child(19) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //Sobre las cuotas
        cy.get(':nth-child(20) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Qué es la TIR?
        cy.get(':nth-child(21) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Si la PYME no paga, quien hace la cobranza?
        cy.get(':nth-child(22) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //Siempre diversifica tu inversión para minimizar tu riesgo.
        cy.get(':nth-child(23) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Las fechas de pago que aparecen en los proyectos son reales?
        cy.get(':nth-child(24) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Puedo invertir como Sociedad?
        cy.get(':nth-child(25) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //Frente a la muerte del inversionista. ¿Los herederos pueden recuperar la inversión?
        cy.get(':nth-child(26) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Cuentan con algún modulo de prueba o tutorial, práctico para poder entender bien los pasos para invertir?
        cy.get(':nth-child(27) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //presionar tutorial
        cy.get('.v-expansion-panel__container--active > .v-expansion-panel__body > .v-card > .v-card__text > p > a').click({force:true});
        cy.wait(5000);
        //¿Cuentan con algún instructivo que permita poder comprender, cómo funciona RedCapital, los productos, riesgos y respaldos de mis inversiones?
        cy.get(':nth-child(28) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        
        //presionar instructivo
        //cy.get('.v-expansion-panel__container--active > .v-expansion-panel__body > .v-card > .v-card__text > p > a').click();
        //cy.wait(5000);
        
        //Como puedo confirmar si tengo montos pendientes de transferir en una inversión?
        cy.get(':nth-child(29) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //En mis registros figuran más Operaciones de las requeridas, como lo puedo hacer para anular las que no voy a utilizar.
        cy.get(':nth-child(30) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //presionar correo
       // cy.get('.v-expansion-panel__container--active > .v-expansion-panel__body > .v-card > .v-card__text > p > a').click();
        //cy.wait(5000);
        //¿Puedo anular mi inversión?.
        cy.get(':nth-child(31) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Qué beneficios ofrece el club?
        cy.get(':nth-child(32) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Cuáles son las garantías que ofrece RedCapital al inversionista?
        cy.get(':nth-child(33) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //Si la PYME o el deudor no responde ante un pago de un crédito y RedCapital no logra conseguir los pagos comprometidos después de realizar todas las acciones legales correspondientes para la cobranza ¿El inversionista pierde el dinero invertido?
        cy.get(':nth-child(34) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //Si la SGR (fondos Corfo) asegura en un 100% el monto invertido ¿No existe ninguna posibilidad de riesgo para el inversionista de perder su inversión?
        cy.get(':nth-child(35) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Qué gana la SGR asegurando el monto invertido de un inversionista?
        cy.get(':nth-child(36) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Qué pasa si una PYME no logra pagarle a la SGR el crédito pedido?
        cy.get(':nth-child(37) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //Un requisito para hacer una solicitud de crédito es que el monto a pedir sea mínimo de $5.000.000 ¿Por qué en la plataforma se ven solicitudes menores a este monto?
        cy.get(':nth-child(38) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Cuál es la diferencia entre Cliente y Deudor?
        cy.get(':nth-child(39) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Qué tipo de riesgos existen en el Factoring y cómo se minimizan?
        cy.get(':nth-child(40) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Existe algún tipo de seguro para las facturas?
        cy.get(':nth-child(41) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿RedCapital se hace responsable si no se verifica la factura?
        cy.get(':nth-child(42) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Qué pasa si el banco del inversionista tiene un tope de dinero diario para realizar transferencias?
        cy.get(':nth-child(43) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Qué fórmulas utilizan para determinar la rentabilidad de un proyecto o TIR de la inversión (TIR PPTO) y la TIR real?
        cy.get(':nth-child(44) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //Si un inversionista invierte ¿Qué sucede si para la fecha de cierre del proyecto, este no ha sido financiado al 100%?
        cy.get(':nth-child(45) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Los intereses recibidos por los inversionistas son informados al Servicio de Impuestos Internos (SII)?
        cy.get(':nth-child(46) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿El inversionista debe declarar los ingresos recibidos de sus inversiones a través de la plataforma www.redcapital.cl ?
        cy.get(':nth-child(47) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Qué pasa en los casos en que la factura no se ha financiado al 100%?
        cy.get(':nth-child(48) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Qué pasa si un proyecto no es financiado?
        cy.get(':nth-child(49) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Los intereses corren desde que transferí?
        cy.get(':nth-child(50) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Cuántos día dura el remate de un proyecto?
        cy.get(':nth-child(51) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Si tengo un reclamo cómo lo puedo resolver?
        cy.get(':nth-child(52) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Qué puedo hacer si no resuelven mis reclamos?
        cy.get(':nth-child(53) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Cuánto demoran en resolver un reclamo?
        cy.get(':nth-child(54) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
        //¿Cuál es el reclamo más habitual que reciben en RedCapital?
        cy.get(':nth-child(55) > .v-expansion-panel__header > .body-2').click();
        cy.wait(5000);
    })
    it('Test contacto',()=>{
        //ingresar a ayuda
        cy.get(':nth-child(5) > .v-btn__content').click();
        cy.wait(5000);
        //ingresar a contacto
        cy.get('.v-menu__content:nth-child(1) > .v-list > .text-uppercase:nth-child(3) > .v-list__tile > .v-list__tile__title').click({force:true});
        cy.wait(5000);
        //nombre
        cy.get('.elevation-3 > .layout > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('test');
        cy.wait(5000);
        //email
        cy.get(':nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').type('test@test.cl');
        cy.wait(5000);
        //telefono
        cy.get(':nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').type('98743875');
        cy.wait(5000);
        //seleccione una clasificacion
        cy.get(':nth-child(5) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
        cy.wait(5000);
        //seleccionar proyecto en mora
        cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(1) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
        cy.wait(5000);
        //mensaje
        cy.get(':nth-child(7) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').type('consulta test');
        cy.wait(5000);
        //enviar
        cy.get(':nth-child(8) > :nth-child(2) > :nth-child(1)').click();
        cy.wait(5000);

    })
    it('Test garantía y riesgo',()=>{
        //ingresar a ayuda
        cy.get(':nth-child(5) > .v-btn__content').click();
        cy.wait(5000);
        //ingresar a garantia y riesgo
        cy.get('.v-menu__content:nth-child(1) > .v-list > .text-uppercase:nth-child(2) > .v-list__tile > .v-list__tile__title').click({force:true});
        cy.wait(5000);
        //¿que es redcapital?
        cy.get(':nth-child(1) > .v-expansion-panel__header > .v-expansion-panel__header__icon > .v-icon').click();
        cy.wait(5000);
        //¿que son las garantias para los inversionistas?
        cy.get(':nth-child(2) > .v-expansion-panel__header').click();
        cy.wait(5000);
        //¿cuales son los riesgos?
        cy.get(':nth-child(3) > .v-expansion-panel__header').click();
        cy.wait(5000);
        //¿redcapital garantiza las inversiones?
        cy.get(':nth-child(4) > .v-expansion-panel__header').click();
        cy.wait(5000);
        //garantias y riesgos de leasing
        cy.get(':nth-child(5) > .v-expansion-panel__header').click();
        cy.wait(5000);
        //garantias y riesgos cheques
        cy.get(':nth-child(6) > .v-expansion-panel__header').click();
        cy.wait(5000);
        //garantias y riesgos confirming
        cy.get(':nth-child(7) > .v-expansion-panel__header').click();
        cy.wait(5000);
        //garantias y riesgos facturas
        cy.get(':nth-child(8) > .v-expansion-panel__header').click();
        cy.wait(5000);
        //garantias y riesgos de credito SGR
        cy.get(':nth-child(9) > .v-expansion-panel__header').click();
        cy.wait(5000);
    })
    it('Test blog',()=>{
        //ingresar a ayuda
        cy.get(':nth-child(5) > .v-btn__content').click();
        cy.wait(5000);
        //blog
        cy.get('.v-menu__content > .v-list > .text-uppercase:nth-child(4) > .v-list__tile > .v-list__tile__title').click({force:true});
        cy.wait(5000);
    })
  
})