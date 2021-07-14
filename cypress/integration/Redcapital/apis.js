
   describe('Apis test case', function(){
   /* it('returns JSON', () => {
        cy.request('https://dev.redcapital.cl/api/estadisticas/totalMontosInvertidoProyectosActivos/28')
          .its('headers')
          .its('content-type')
          .should('include', 'application/json')
       })
       
       it('Validate the status', () => {
         cy.request('https://dev.redcapital.cl/api/estadisticas/totalMontosInvertidoProyectosActivos/28')
        .its('status')
              .should('equal',200);
       })
*/

       ///
       it('returns JSON', () => {
        cy.request('https://dev.redcapital.cl/api/usuario/6984')
          .its('headers')
          .its('content-type')
          .should('include', 'application/json')
       })
       
       it('Validate the status', () => {
         cy.request('https://dev.redcapital.cl/api/usuario/6984')
        .its('status')
              .should('equal',200);
       })
    
    
   })