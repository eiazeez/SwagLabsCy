import { el } from './elements'
import HomePage from '../home'

class CartPage {

    shouldBeVisible () {
        cy.url()
          .should('eq', 'https://www.saucedemo.com/cart.html')
        cy.get(el.title)
          .should('be.visible')
          .should('have.text', 'Your Cart')
        cy.get(el.itens)
          .should('be.visible')
    }

    addOneMoreItem () {
        cy.get(el.continueShopping).click()
        HomePage.getRandomProduct ()
        HomePage.goToCart ()
        cy.get(el.itens).should('have.length', 2)
    }

    goToCheckout () {
        cy.get(el.checkoutBtn).click()
    }

}

export default new CartPage()