describe('testing diff view ports', () =>{

    before(()=>{
        console.log('running my test');
    })

    beforeEach(()=>{
        cy.visit('http://www.google.com')
    })

    it('Open in macbook -13', ()=>{
        cy.viewport('macbook-13')
        cy.screenshot()
        cy.wait(200)
    })

    it('Open in macbook -15', ()=>{
        cy.viewport('macbook-15')
        cy.screenshot()
        cy.wait(200)
    })

    it('Open in iphone-x', ()=>{
        cy.viewport('iphone-x')
        cy.screenshot()
        cy.wait(200)
    })

    it('Open in 550 and 750', ()=>{
        cy.viewport(550, 750)
        cy.screenshot()
        cy.wait(200)
    })


})