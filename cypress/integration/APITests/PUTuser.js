/// <reference types="Cypress" />
const dataJson = require('../../fixtures/createuser')

describe('post user request', () => {
 let accessToken = '007526d9efdbc07e084ff7a6d4cfcc90588fbe20641c00faebf45a7f3b2eaf33'
let randomText = ""
let testEmail = ""


    it.only('create user test', () => {
        var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for (var i = 0; i < 10; i++)
        randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length));
        testEmail = randomText + '@gmail.com'
            
            //1. create user (POST)
            cy.request({
                method: 'POST',
                url: 'https://gorest.co.in/public/v2/users',
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                },
                body: {
                    "name":"Test Automation Cypress",
                    "gender":"male",
                    "email": "123@gmail.com",
                    "status":"active"
                  }
   
            }).then((res)=>{
                cy.log(JSON.stringify(res))
                expect(res.status).to.eq(201)
                expect(res.body).has.property('email', '123@gmail.com')
                expect(res.body).has.property('name','Test Automation Cypress')
                expect(res.body).has.property('status','active')
                expect(res.body).has.property('gender','male')
            }).then((res) =>{
                   const userId = res.body.id 
                    cy.log("user id is: " + userId)
                    //2. update user (PUT)
                    cy.request({
                        method: 'PUT',
                        url: 'https://gorest.co.in/public/v2/users/'+userId,
                        headers: {
                            'Authorization': 'Bearer ' + accessToken
                        },
                        body: {
                            "name":"Test Automation Cypress Updated 123",
                            "gender":"female",
                            "email": "123updated@gmail.com",
                            "status":"inactive"
                          }
                    }).then((res)=>{
                        expect(res.status).to.eq(200)
                        expect(res.body).has.property('email', '123updated@gmail.com')
                        expect(res.body).has.property('name','Test Automation Cypress Updated 123')
                        expect(res.body).has.property('status','inactive')
                        expect(res.body).has.property('gender','female')
                    }).then((res) =>{
                        const userId = res.body.id 
                         cy.log("user id is: " + userId)
                         //3. Get update user (GET)
                         cy.request({
                             method: 'GET',
                             url: 'https://gorest.co.in/public/v2/users/'+userId,
                             headers: {
                                 'Authorization': 'Bearer ' + accessToken
                             }
                         }).then((res)=>{
                             expect(res.status).to.eq(200)
                             expect(res.body).has.property('email', '123updated@gmail.com')
                             expect(res.body).has.property('name','Test Automation Cypress Updated 123')
                             expect(res.body).has.property('status','inactive')
                             expect(res.body).has.property('gender','female')
                         })
            })
            
            })
        
    })
})