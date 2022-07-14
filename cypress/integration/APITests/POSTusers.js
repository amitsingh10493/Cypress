const datajson = require('D:/cypress-practice/cypress/fixtures/createuser.json')

describe('Post user request', () => {

   let accessToken = '3f76e24e62f1f2aefd03548f9431917d39de19578a799ca7ccf6779f28a177ef'
   let randomText = ""
   let testEmail = ""

    it('create user test', () => {

        var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for (var i = 0; i < 10; i++)
        randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length));
        testEmail = randomText + '@gmail.com'
// This method is also correct but we have use first line

    //     cy.request({
    //         method: 'POST',
    //         url: 'https://gorest.co.in/public/v2/users',
    //         headers: {
    //             'Authorization': 'Bearer ' + accessToken
    //         },
    //         body: {
    //                 "name":datajson.name,
    //                 "gender":datajson.gender,
    //                 "email": testEmail,
    //                 "status":datajson.status
    //               }
    //             }).then((res) => {
    //                 cy.log(JSON.stringify(res))
    //                expect(res.status).equal(201)
    //                 expect(res.body).has.property('name', datajson.name)
    //                 expect(res.body).has.property('email', testEmail)
    //                 expect(res.body).has.property('gender', datajson.gender)
    //                 expect(res.body).has.property('status', datajson.status)
    //             })

    // Below is another method to use fixture data
    cy.fixture('createuser').then((payload) => {
// 1. create user (POST call)
    cy.request({
        method: 'POST',
        url: 'https://gorest.co.in/public/v2/users',
        headers: {
            'Authorization': 'Bearer ' + accessToken
        },
        body: {
                "name":payload.name,
                "gender":payload.gender,
                "email": testEmail,
                "status":payload.status
              }
            }).then((res) => {
                cy.log(JSON.stringify(res))
               expect(res.status).equal(201)
                expect(res.body).has.property('name', payload.name)
                expect(res.body).has.property('email', testEmail)
                expect(res.body).has.property('gender', payload.gender)
                expect(res.body).has.property('status', payload.status)
            }).then((res) => {
                const userID = res.body.id
                cy.log("User ID is:" + userID)
                // 2. Get user (GET call)
                cy.request({
                    method: 'GET',
                    url: 'https://gorest.co.in/public/v2/users/'+userID,
                    headers: {
                        'Authorization': 'Bearer ' + accessToken
                    }
                }).then((res) => {
                    expect(res.status).equal(200)
                    expect(res.body).has.property('id',userID )
                    expect(res.body).has.property('name', payload.name)
                    expect(res.body).has.property('email', testEmail)
                    expect(res.body).has.property('gender', payload.gender)
                    expect(res.body).has.property('status', payload.status)

                })
            })
    })
})

})