/// <reference types="Cypress" />


describe('check element get concept', () => {

    it('element get testing', ()=>{

     cy.visit('https://www.freshworks.com/')
     cy.contains('Support').click()
     cy.url().should('include','support')
     // .nav-label h1:nth-of-type(2)
     cy.get(':nth-child(6) > .nav-label')
     .should('be.visible')
     
     //.and('contain','Engage with the community')
     .and('have.length', 1)

     cy.get('ul.footer-nav li').should('have.length',23)

     cy.get('ul.footer-nav li').find("a[href*='footer']").should('have.length',5)




    })



})