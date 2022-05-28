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

    selectRandomFilter () {
      cy.get(el.filter)
        .select(Cypress._.sample(filters))
    }

    goToCart () {
      cy.get(el.cart).click()
    }

}

export default new HomePage()