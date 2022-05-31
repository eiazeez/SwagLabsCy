import CartPage from '../support/pages/cart'
import HomePage from '../support/pages/home'

describe ('HomePage', function () {

    context ('Testando funções da Home', function () {

     const user = {
      username: 'standard_user',
      password: 'secret_sauce',
    }
        before ('Logar com o user bom', function () {
            cy.login(user)
        })

            it ('Adicionar e remover produtos ao carrinho', function () {
                HomePage.addAllProducts ()
                HomePage.counterShouldHave ()
                              
        })
    })
})