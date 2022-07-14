describe('API testing with Alias', ()=>{

    beforeEach(() => {
        cy.request('/users?page=2').as('users')
    })

    it('Validate the header info', () =>{

        cy.get('@users')
        .its('headers')
        .its('content-type')
        .should('include','application/json; charset=utf-8')
    })

    it('Validate the starus code', () =>{

        cy.get('@users')
        .its('status')
        .should('equal',200)
    })

    it('Validate total pages in the body', () =>{

        cy.get('@users')
        .its('body')
        .should('contains',{'total_pages': 2})
    })

    it('Validate the user info in data json aaray', () =>{

        cy.get('@users')
        .its('body').then((res) => {
            expect(res.data[0]).has.property('first_name','Michael')

        })
        
    })





})