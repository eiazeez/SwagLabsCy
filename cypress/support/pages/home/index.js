import { el, filters } from './elements'

class HomePage {
    shouldBeVisible () {
        cy.url()
          .should('eq', 'https://www.saucedemo.com/inventory.html')
        cy.get(el.title)
          .should('be.visible')
          .should('have.text', 'Products')
        cy.get(el.invetory)
          .should('be.visible')
    }

    getRandomProduct () {
      return cy.get(el.buyButton)
    .then(($li) => {
      const items = $li.toArray()
      return Cypress._.sample(items)
    })
    .click()
  }
  
    addAllProducts () {
      cy.get(el.buyButton).click( { multiple: true } )
    }

    counterShouldHave () {
        cy.get(el.cartCounter).invoke('text').then(($value) => {
        cy.get(el.cartCounter)
          .should('have.text', $value)
      })   
    }

    removeAllProducts () {
      cy.get(el.buyButton).click( { multiple: true } )
    }

    selectRandomFilter () {
      cy.get(el.filter)
        .select(Cypress._.sample(filters))
    }

    goToCart () {
      cy.get(el.cart).click()
    }

}

export default new HomePage()