

it ('Deve acessar a págin de login do Swag Labs', function () {
    cy.visit('/')

    cy.get('.login_wrapper-inner').should('be.visible')
})