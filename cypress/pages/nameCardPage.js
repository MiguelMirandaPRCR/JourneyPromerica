class nameCardPage{

    elements = {
        titleNameText: ()=> cy.get('.header-primary > div'),
        cardImage: ()=> cy.get('.tarjeta'),
        nameLabelCard: ()=> cy.get('.mat-radio-label-checkName') ,
        option1Name: ()=> cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle'),
        option2Name: ()=> cy.get('#mat-radio-3 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle'),
        option3Name: ()=> cy.get('#mat-radio-4 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle'),
		continueButton: ()=> cy.get('#btnFlat1654796644073')
		
    }

    validateElements(){
        this.elements.titleNameText().should('be.visible');
        this.elements.cardImage().should('be.visible');
        this.elements.nameLabelCard().should('be.visible');
        this.elements.option1Name().should('be.visible');
        this.elements.option2Name().should('be.visible');
        this.elements.option3Name().should('be.visible');
        this.elements.continueButton().should('be.visible');   
    }
    clickOption1(){
        this.elements.option1Name().click({ force: true });
    }
    clickOption2(){
        this.elements.option2Name().click({ force: true });
    }
    clickOption3(){
        this.elements.option3Name().click({ force: true });
    }
    clickContinueButton(){
        this.elements.continueButton().click({ force: true });
    }
}


module.exports = new nameCardPage();