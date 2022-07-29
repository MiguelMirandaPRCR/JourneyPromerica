class onboardingPage{

    elements = {
            greetingsLabel: ()=> cy.get('[style="font-weight: 300; font-size: 16px; font-family: Hind; margin-top: 34px; text-align: left;"] > :nth-child(1)'),
        onboardingText: ()=> cy.get('[apppreventdoubleclick=""] > div > span'),
        obboardingComplementText: ()=> cy.get('#app-input-control-simple-6 > .promerica-input-container > div > span'),
        continueButton: ()=> cy.get('#btnFlat1651700018040')
    }

    validateElements(){
        this.elements.greetingsLabel().should('be.visible');
        this.elements.onboardingText().should('be.visible');
        this.elements.obboardingComplementText().should('be.visible');
    }
    
    clickContinueButton(){
        this.elements.continueButton().click({ force: true });
    }
}

module.exports = new onboardingPage();