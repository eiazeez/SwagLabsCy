import { el } from './elements'
import HomePage from '../home'

class CheckoutPage {

    shouldBeVisible () {
        cy.get(el.title)
          .should('be.visible')
          .should('have.text', 'Checkout: Your Information')
        cy.get(el.checkoutInfo)
          .should('be.visible')
    }

    form (user) {
        cy.get(el.firstName)
          .clear()
          .type(user.firstName)
        cy.get(el.lastName)
          .clear()
          .type(user.lastName)    
        cy.get(el.postalCode)
          .clear()
          .type(user.postalCode)        
    }

    submit () {
        cy.get(el.continue).click()
    }

    itensShouldBeVisible () {
        cy.get(el.itens) 
          .should('be.visible')
    }

    finish () {
        cy.get(el.finish)
          .click()
    }

    congratsShouldHaveTxt (expectedMessage) {
        cy.get(el.congratsMsg)
          .should('be.visible')
          .should('have.text', expectedMessage)
    }

    goBackToHome () {
        cy.get(el.backToHome)
          .click()
        HomePage.shouldBeVisible ()
    }

}

export default new CheckoutPage 