class loadingPage{

    elements = {
        waitingText: ()=> cy.get('#app-input-control-simple-6 > .promerica-input-container > div > span')
		
    }

    validateElements(){
        this.elements.waitingText().should('be.visible');
    }
}


module.exports = new loadingPage();