/// <reference types="Cypress" />


describe('Back and forward button simulate', () => {

    it('back-fwd test', ()=>{

     cy.visit('https://www.freshworks.com/')
     cy.contains('Support').click()
     .go('back' ,{timeout:5000})
     .go('forward',{timeout:5000})
    //cy.go('back' ,{timeout:5000}) //preferable and timeout optional
    //cy.go(-1)  - Also correct
     //cy.wait(2000)
    //cy.go('forward')
    //cy.go(1)  - Also correct
     


    })



})