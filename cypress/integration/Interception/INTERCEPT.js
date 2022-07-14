/// <reference types="Cypress" />

describe('intercept with cypress example', () => {

    it('test api with simple intercept', () => {
        
        cy.visit('https://jsonplaceholder.typicode.com/')

        cy.intercept({

            path: '/posts'
        }).as('posts')

        cy.get("table:nth-of-type(1) a[href='/posts']").click()
        cy.wait('@posts').then((inter) => {

            cy.log(JSON.stringify(inter))
            console.log(JSON.stringify(inter))
            expect(inter.response.body).to.have.length(100)
        })
    })

    it('mocking with intercept test with static response', () => {
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept('GET', '/posts', {totalPost:5 , name: 'Amit Singh'}).as('posts')
        cy.get("table:nth-of-type(1) a[href='/posts']").click()
        cy.wait('@posts')
    })

    it.only('mocking with intercept test with dynamic fixture response', () => {
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept('GET', '/posts', {fixture: 'createuser.JSON'}).as('posts')
        cy.get("table:nth-of-type(1) a[href='/posts']").click()
        cy.wait('@posts')
    })
})