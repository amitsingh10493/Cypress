describe('get api user tests', () => {

    let accessToken = '3f76e24e62f1f2aefd03548f9431917d39de19578a799ca7ccf6779f28a177ef'

it('get users test', () => {

cy.request({
    method : 'GET',
    url : 'https://gorest.co.in/public/v2/users',
    header : {
        'authorization' : 'Bearer' + accessToken
    }
}).then((res) => {

    expect(res.status).to.eq(200)
    expect(res.body[0]).has.property('id', 3921)
    expect(res.body[1]).has.property('id', 3920)
})
})

it('get users by ID test', () => {

    cy.request({
        method : 'GET',
        url : 'https://gorest.co.in/public/v2/users/3920',
        header : {
            'authorization' : 'Bearer' + accessToken
        }
    }).then((res) => {
    
        expect(res.status).to.eq(200)
        expect(res.body).has.property('name', 'Kashyapi Chattopadhyay')
    })

})




})