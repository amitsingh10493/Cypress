/// <reference types="Cypress" />


describe('Drop down feature', () => {

    it.skip('With select tag test', ()=>{

        cy.visit('https://www.orangehrm.com/orangehrm-30-day-trial/')
        cy.get('#Form_submitForm_Country')
        .select('Angola')
        .should('have.value','Angola')
    })

    it.skip('Google search test', ()=>{

        cy.visit('https://www.google.com/')
        cy.get("input[name='q']").type('cypress')
        cy.wait(2000)
        cy.get('.G43f7e')
        cy.wait(2000)
        .find('li span')
        cy.wait(2000)
        .contains('Cypress vine')
        cy.wait(2000)
        .click()
        
    })

    it('Automation ecom search test', ()=>{

        cy.visit('http://automationpractice.com/index.php')
        cy.get('#search_query_top').type('Dresses').wait(2000)

        cy.get('.ac_results')
        .find('li')
        .contains('T-shirts').click()
        
    })
})

