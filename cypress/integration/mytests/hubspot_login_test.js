describe(' hub spot login feature', () =>{

    it('Handle hub spot login test', ()=>{

        //, {failOnStatusCode: false}

        cy.visit('https://app.hubspot.com/login', {failOnStatusCode: false})
        cy.get('#username').type('amit.singh@gmail.com')
        cy.get('#password').type('amit123')
        cy.get('#loginBtn').click()
        

       
    })


})