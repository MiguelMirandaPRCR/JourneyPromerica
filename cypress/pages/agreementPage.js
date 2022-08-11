class agreementPage{

    elements = {
        agreementTitle: ()=> cy.get('#app-input-control-simple-54 > .promerica-input-container > [apppreventdoubleclick=""] > div'),
        nameCard: ()=> cy.get('#app-input-control-simple-62 > .promerica-input-container > div > [style="text-align: left;"]'),
        limitApproved: ()=> cy.get('#app-input-control-simple-68 > .promerica-input-container > div > span'),
        rateLabel: ()=> cy.get('[style="font-weight: 400; font-size: 14px; font-family: Hind; text-align: left;"]'),
        benefitsText: ()=> cy.get('#app-input-control-simple-80 > .promerica-input-container'),
        cashbackText: ()=> cy.get('#app-input-control-simple-86 > .promerica-input-container'),
        termsText: ()=> cy.get('a'),
        acceptTermsCheckbox: ()=> cy.get('.mat-checkbox-inner-container'),
        continueButton: ()=> cy.get('#btnAcceptDocuments')
    }

    validateElements(){
        this.elements.agreementTitle().should('be.visible');
        this.elements.nameCard().should('be.visible');
        this.elements.limitApproved().should('be.visible');
        this.elements.rateLabel().should('be.visible');
        this.elements.benefitsText().should('be.visible');
       // this.elements.cashbackText().should('be.visible');
        this.elements.termsText().should('be.visible');
        this.elements.acceptTermsCheckbox().should('be.visible');
    }

    clickAcceptTerms(){
        this.elements.acceptTermsCheckbox().click({ force: true });
    }

    clickContinueButton(){
        this.elements.continueButton().click({ force: true });
    }
}

module.exports = new agreementPage();