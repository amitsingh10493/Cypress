/// <reference types="Cypress" />


describe('Amazon search test', () => {

    it('search testing', ()=>{

     cy.visit('https://www.amazon.in/')
     cy.get('div.nav-search-field ').within(()=>{

        cy.get('#twotabsearchtextbox').type('Apple laptop')


     })
     


    })



})