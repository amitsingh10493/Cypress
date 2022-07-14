/// <reference types="Cypress" />


describe('checkbox feature', () => {

    it('selecting checkbox test for automation practice', ()=>{

        cy.visit('http://automationpractice.com/index.php')
        cy.get('.sf-with-ul').first().click()
        //check the checkboxes and verify them
        cy.get('.checkbox').check().parent().should('have.class','checked')
        //Uncheck the checkboxes and verify them
        cy.get('.checkbox').uncheck().parent().should('not.have.class','checked')
        
    })

    it('selecting checkbox test for snapdeal', ()=>{

        cy.visit('https://www.snapdeal.com/')
        cy.get('#inputValEnter').type('Laptop')
        cy.get('.searchTextSpan').click()
      
      // cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input').check({force: true}).should('have.checked','checked')
      //check
      cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input').check({force: true})
       cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input').should('have.checked','checked')

       //uncheck
       cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input').uncheck({force: true}) 
       cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input').should('not.have.checked','checked')
    })

})