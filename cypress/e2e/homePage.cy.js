import CartPage from '../support/pages/cart'
import HomePage from '../support/pages/home'
import LoginPage from '../support/pages/login'

describe ('HomePage', function () {

    context ('Para testar os produtos da home', function () {

     const user = {
      username: 'standard_user',
      password: 'secret_sauce',
    }
        before ('Logar com o user bom', function () {
            cy.login(user)
        })

            it ('Deve ser possível adicionar', function () {
                HomePage.addAllProducts ()
                HomePage.counterShouldHave ()                    
        })
            it ('Deve ser possível remover', function () {
                HomePage.removeAllProducts ()              
        })  
    })

    context ('Para testar o Logout', function () {

        const user = {
         username: 'standard_user',
         password: 'secret_sauce',
       }
           before ('Logar com o user bom', function () {
               cy.login(user)
           })
   
               it ('Deve realizar o Logout pelo menu', function () {
                HomePage.openMenu ()
                HomePage.logout ()
                LoginPage.shouldBeVisible ()
           })
       })
})