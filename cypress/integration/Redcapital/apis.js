const { expect } = require("chai");

describe('Apis test case', function () {
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

  /*it('returns JSON', () => {
    cy.request('https://dev.redcapital.cl/api/usuario/testing3')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json')
  })
  */

 /* it('Validate the status', () => {
    cy.request('https://dev.redcapital.cl/api/usuario/testing3')
      .its('status')
      .should('eq', 200);
  })
  */
  it('proyecto_montos_total',()=>{
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM3YmI5MDI3NzNhZTFjYTg0Yzg4ZWE3ZjcyMDQ3ZGY5NjlkOTEyZjVmMzBiMDhjODkwMjIwNzc4OWM5MTY0ZmUxYjkyYzM1ZDk3NDVmMDczIn0.eyJhdWQiOiIxIiwianRpIjoiMzdiYjkwMjc3M2FlMWNhODRjODhlYTdmNzIwNDdkZjk2OWQ5MTJmNWYzMGIwOGM4OTAyMjA3Nzg5YzkxNjRmZTFiOTJjMzVkOTc0NWYwNzMiLCJpYXQiOjE2MjY5ODc3NTUsIm5iZiI6MTYyNjk4Nzc1NSwiZXhwIjoxNjI3MjQ2OTU1LCJzdWIiOiI2OTg0Iiwic2NvcGVzIjpbXX0.Rf7JgiKRe6SqMyDJaPEx6J9W0RH9v-GBuRedigvJv3Z_PraYmcPIKjGwwsSEWYz5imhZ-WNvJbNL86hGCzh1b1HR9Be4i7XmpVav-TJaVspMnVxGKqg9LfxDO3q0G-JZJKsGqOaM7vEl9uYgRiFPuSpR4CLaRlPSgfAKAi0mnLu_4j3wJplOZBQI8Qv140Y_jVYUD6GVjkdGe-7OJFbg2x7-f0U6f0F6AQWixpRxJE7Pj-Hn7kaeFvZQfG-5hfV6lrtlP6eY0pXGYk3TqPjhWbwp_2xNy-tfboIC89Jrp3OwjV2RRrg6b4T7LMz0FJsN5FJAYlei-5eK1_3w1Vm61ysfCyvtTjKxVpC0yULMX5vU-UBiT2lkWP8lot6sdgTb9-N4sNlpFC9-sUwFxoQXBTh79WpqxWoaUtH001d5-O6N0aAVCo4o_AnIk3bPSuKqRwtN0tz0f6DVdV46vq0V2iJeM1DADg-V-6zGa-htv_ErSJY24FSbYwgi-iUuJjA1FTNCWOcOooGkKqEzV0jzFaUj8yat7rGGOxvSKfQ2TRLQaf7NIGsUZzafUvRpa-iKClqHEbhh6NMYhvvo1s51Pf8RnZIUCnzezujhSH9gBbnT92e50qKu6WPwpLNHYN1iaHt6xDEETD15dN00VNJ7ai3XZ8uWdgu0SYm0Hlylv3Y';
    const authorization = `bearer ${token}`;
    const options = {
      method: 'GET',
      url: `https://dev.redcapital.cl/api/proyecto-montos-total/566`,
      headers: {
        authorization,
    }};
    cy.request(options).its('body').then((response)=>{
      return JSON.stringify(response);
    }).then((dataTa)=>{
      cy.log(dataTa);
      //expect(dataTa.message).to.be.eq('Proyecto obtenido satisfactoriamente.');
    })
    
  })
  /*
  it('Api socio', () => {
    cy.request('https://dev.redcapital.cl/api/socio/6984')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json')
  })
  it('Validate the status', () => {
    cy.request('https://dev.redcapital.cl/api/socio/6984')
      .its('status')
      .should('equal', 200);
  })
  it('Iniciar sesion dev',()=>{
    cy.request('POST','https://dev.redcapital.cl/api/login',{rut: "76400275-k",password: "redcapital"})
    .its('body').then((body)=>{
        cy.log(body);
    })
  })
  */

})