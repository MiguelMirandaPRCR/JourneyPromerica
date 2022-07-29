class productPage{

    elements = {
        titleText: ()=> cy.get('[apppreventdoubleclick=""] > div'),
        swipeProductContainer: ()=> cy.get('.swiper-container'),
        specificProductCard:()=> cy.get('.swiper-slide-active > .swiper-slide > div > .slider-content-style'),
        productOffer: ()=> cy.get('.body-card'),
        contactlessButton: ()=> cy.get('strong'),
        continueButton: ()=> cy.get('#btnFlat1651857686813')
		
		
    }

    validateElements(){
        this.elements.titleText().should('be.visible');
        this.elements.swipeProductContainer().should('be.visible');
        this.elements.productOffer().should('be.visible');
        this.elements.contactlessButton().should('be.visible');
    }
    
    swipeProductContainer(){
        cy.get('.swiper-container')
        .trigger('pointerdown', { which: 1 })
        .trigger('pointermove', 'left', { force: true })
        .trigger('pointerup', { force: true });
    }
    
    clickContinueButton(){
        this.elements.continueButton().click({ force: true });
    }

}


module.exports = new productPage();