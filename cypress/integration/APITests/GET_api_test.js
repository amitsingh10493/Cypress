describe('GET API for rest', ()=>{

    it('GET API for flask - MotorBike', () =>{
        cy.request('https://flask-rest-api-demo.herokuapp.com/product/motorbike').then((res) => {
            // By default it will consider'GET' method if you method passed
        //    cy.request('GET','https://flask-rest-api-demo.herokuapp.com/product/motorbike').then((res) => {
        expect(res.status).equal(200)
        expect(res.body.product[0]).has.property('price',599.99)
        expect(res.body.product[0]).has.property('product','motorbike')
  })
 })

 it('GET API for flask - Users', () =>{
    cy.request('https://flask-rest-api-demo.herokuapp.com/users').then((res) => {
    expect(res.status).equal(200)
    expect(res.body.users[0]).has.property('username','test_1')
    expect(res.body.users[1]).has.property('id',2)
    expect(res.body.users).have.length(5)
    expect(res.body.users).not.have.property('price')
})
})

it('GET API for flask - Page=2', () =>{
    cy.request('https://reqres.in/api/users?page=2').then((res) => {
    expect(res.status).equal(200)
    expect(res.body.data[0]).has.property('first_name','Michael')
    expect(res.body.data[1]).has.property('email','lindsay.ferguson@reqres.in')
    expect(res.body.data).have.length(6)
})
})

})