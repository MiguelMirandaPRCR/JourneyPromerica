class congratsPage{

    elements = {
        congratsImage: ()=> cy.get('.img-tarjetas'),
        approveInformationText: ()=> cy.get('#app-input-control-simple-120 > .promerica-input-container > [apppreventdoubleclick=""] > div'),
        emailText: ()=> cy.get('#app-input-control-simple-126 > .promerica-input-container > div'),
        phoneText: ()=> cy.get('[style="font-size: 12px; font-family: Hind; text-align: right;"]'),
        updateDataButton: ()=> cy.get('#app-input-control-simple-134 > .promerica-input-container > [apppreventdoubleclick=""] > div'),
        continueButton: ()=> cy.get('#btnFlat1658423448655')
    }

    validateElements(){
        this.elements.congratsImage().should('be.visible');
        this.elements.approveInformationText().should('be.visible');
        this.elements.emailText().should('be.visible');
        this.elements.phoneText().should('be.visible');
        this.elements.updateDataButton().should('be.visible');
        this.elements.continueButton().should('be.visible');
    }

    clickContinueButton(){
        this.elements.continueButton().click({ force: true });
    }
}

module.exports = new congratsPage();