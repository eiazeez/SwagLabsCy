import LoginPage from '../support/pages/login'
import HomePage from '../support/pages/home'
import CartPage from '../support/pages/cart'

describe('Fluxo de Compra comum', function () {

    context('Para comprar algo', function () {

        const user = {
            username: 'standard_user',
            password: 'secret_sauce',
        }

        before('deve logar com um user bom', function () {
                LoginPage.go()
                LoginPage.form(user)
                LoginPage.submit()
    
                HomePage.shouldBeVisible()
        })

        it('deve escolher um dos produtos disponíveis para comprar', function () {
                HomePage.selectRandomFilter ()           
                HomePage.getRandomProduct ()
                HomePage.goToCart ()

                CartPage.shouldBeVisible ()
                CartPage.addOneMoreItem ()
                CartPage.goToCheckout ()
        })

    })

})