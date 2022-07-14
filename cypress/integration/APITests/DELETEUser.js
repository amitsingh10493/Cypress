describe('Delete user request', () => {

    let accessToken = '3f76e24e62f1f2aefd03548f9431917d39de19578a799ca7ccf6779f28a177ef'
    let randomText = ""
    let testEmail = ""
 
     it('create user test', () => {
     cy.request({
         method: 'POST',
         url: 'https://gorest.co.in/public/v2/users',
         headers: {
             'Authorization': 'Bearer ' + accessToken
         },
         body: {
                "name": "Create User cypress",
                "email": "createuser@gmail.com",
                "gender": "female",
                "status": "inactive"
               }
             }).then((res) => {
                 cy.log(JSON.stringify(res))
                expect(res.status).equal(201)
                 expect(res.body).has.property('name','Create User cypress')
                 expect(res.body).has.property('email','createuser@gmail.com')
             }).then((res) => {
                const userID = res.body.id
                cy.log("User ID is:" + userID)
                // 2. Delete user (GET call)
                cy.request({
                    method: 'DELETE',
                    url: 'https://gorest.co.in/public/v2/users/'+userID,
                    headers: {
                        'Authorization': 'Bearer ' + accessToken
                    }
                }).then((res) => {
                    expect(res.status).equal(204)

                })

            })

        })

    })
