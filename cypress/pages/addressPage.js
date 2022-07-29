class addressPage{

    elements = {
        titleText: ()=> cy.get('.header-primary > div'),
        CardImage: ()=> cy.get('#app-input-control-simple-104 > .promerica-input-container > .img-tarjetas'),
        officeTitle: ()=> cy.get(':nth-child(1) > [style="display: flex; border-radius: 8px; border: 1px solid rgb(181, 181, 181); padding: 21px 16px;"] > .d-flex > [style="order: 1;"] > :nth-child(1) > .direccion-header'),
        officeOption: ()=> cy.get('#mat-radio-6 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle'),
        houseTitle: ()=> cy.get(':nth-child(2) > [style="display: flex; border-radius: 8px; border: 1px solid rgb(181, 181, 181); padding: 21px 16px;"] > .d-flex > [style="order: 1;"] > :nth-child(1) > .direccion-header'),
        houseOption: ()=> cy.get('#mat-radio-7 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle'),
        newAddressTitle: ()=> cy.get(':nth-child(3) > [style="display: flex; border-radius: 8px; border: 1px solid rgb(181, 181, 181); padding: 21px 16px;"] > .d-flex > [style="order: 1;"] > :nth-child(1) > .direccion-header'),
        newAddressOption: ()=> cy.get('#mat-radio-8 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle'),
        informationLabel: ()=> cy.get('[style="margin-left: 9px"] > span'),
        continueButton: ()=> cy.get('#btnFlat1652817250723')
    }

    validateElements(){
        this.elements.titleText().should('be.visible');
        this.elements.CardImage().should('be.visible');
        this.elements.officeTitle().should('be.visible');
        this.elements.officeOption().should('be.visible');
        this.elements.houseTitle().should('be.visible');
        this.elements.houseOption().should('be.visible');
        this.elements.newAddressTitle().should('be.visible');
        this.elements.newAddressOption().should('be.visible');
        this.elements.informationLabel().should('be.visible');
        this.elements.continueButton().should('be.visible');
    }

    clickOfficeOption(){
        this.elements.officeOption().click({ force: true });
    }

    clickHouseOption(){
        this.elements.houseOption().click({ force: true });
    }

    clickNewAddressOption(){
        this.elements.newAddressOption().click({ force: true });
    }
    
    clickContinueButton(){
        this.elements.continueButton().click({ force: true });
    }
}

module.exports = new addressPage();