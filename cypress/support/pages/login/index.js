import { el } from './elements'

class LoginPage {

    go () {
        cy.visit('/')

        cy.get(el.formField).should('be.visible')
    }

    form (user) {
        cy.get(el.username)
          .clear()
          .type(user.username)
        cy.get(el.password)
          .clear()
          .type(user.password)
    }

    submit () {
        cy.get(el.loginButton)
          .click()
    }

    errorShouldHaveText (expectedMessage) {
        cy.get(el.error)
          .should('have.text', expectedMessage)
    }

}

export default new LoginPage()