import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const onboardingPage = require('../../pages/onboardingPage')
const loadingPage = require('../../pages/loadingPage')
const productPage = require('../../pages/productPage')
const nameCardPage = require('../../pages/nameCardPage')
const addressPage = require('../../pages/addressPage')
const agreementPage = require('../../pages/agreementPage')
const congratsPage = require('../../pages/congratsPage')

Given('The user use validate data to get the token', (datatable)=> {
   let res= "";
    datatable.hashes().forEach((element) => {

        cy.request({
            method: 'POST',
            headers: { authorization: 'Basic dXNyX2NubF9pYjpkZW1v'},
            url: '/auth/authorizer/api/v1/token/tokenVista/obtener',
            body:  { "codAgencia": "",
                     "channel": "",
                     "username": element.username,
                     "view": element.view,
                     "application": element.application
                    },
            }).then((response) =>{
                expect(response).to.have.property('status', 200)
                expect(response.body).to.not.be.null
                expect(response.body).to.have.property('token')   
                res = (response.body.token)
                cy.visit('/'+'/alfred/ui/'+res)
            });
    });
})
When('The user will see the promerica application and use the continue button', ()=>{
    onboardingPage.validateElements();
    onboardingPage.clickContinueButton();
})
And('The user validate the title in loading page', ()=>{
    loadingPage.validateElements();
})
And('The user validate titles and specifications of any product', ()=>{
    productPage.validateElements();
    productPage.swipeProductContainer();
    productPage.swipeProductContainer();
})
And('The user click the button to continue in Product Page', ()=>{
    productPage.clickContinueButton();
})
And('The user validate titles and specifications of Card Name', ()=>{
    nameCardPage.validateElements();
    nameCardPage.clickOption2();
})
And('The user click the button to continue in Card Page', ()=>{
    nameCardPage.clickContinueButton();
})
And('The user validate titles and specifications of the agreement', ()=>{
    agreementPage.validateElements();
})
And('The user clicks the button to continue in Agreement Page', ()=>{
    agreementPage.clickContinueButton();
})
And('The user validate titles and specifications and select option', ()=>{
    addressPage.validateElements();
    addressPage.clickHouseOption();
})
And('The user clicks the button to continue in Address Page', ()=>{
    addressPage.clickContinueButton();
})
And('The user validate titles and specification in Congrats Screen', ()=>{
    congratsPage.validateElements();
})
Then('The user clicks in the button to continue and finish in Congrats Page', ()=>{
    congratsPage.clickContinueButton();
})