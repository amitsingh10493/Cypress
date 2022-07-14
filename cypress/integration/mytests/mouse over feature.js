/// <reference types="Cypress" />



describe('Reload page', () => {

    it.skip('Click on Add-ons test', ()=>{

        cy.visit('https://www.spicejet.com/')
        .contains('SpiceClub').trigger('mouseover')
        .contains('Forex Services').click()
        //This test won't work because spicejet is showing different UI
    })
    it.skip('Amazon app test', ()=>{

        cy.visit('https://www.amazon.in/')
        cy.get('#nav-link-accountList').trigger('mouseover')
        .contains('Sign in').click()
    })

    it('Add to cart test', ()=>{

        cy.visit('http://automationpractice.com/')
        cy.get('.ajax_add_to_cart_button').first().click()
        cy.get('.cross').click()
        cy.get('.cart_block').should('be.hidden').invoke('show')
        cy.get('#button_order_cart').click()
        cy.url().should('include','controller=order')

    })



})