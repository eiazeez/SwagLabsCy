import HomePage from '../support/pages/home'
import CartPage from '../support/pages/cart'
import CheckoutPage from '../support/pages/checkout'

describe('Fluxo de Compra comum', function () {

    context('Para comprar algo', function () {

        const user = {
            username: 'standard_user',
            password: 'secret_sauce',
        }

        before('deve logar com um user bom', function () {
                cy.login (user)
        })

        it('deve comprar como um user comum', function () {
                HomePage.selectRandomFilter ()           
                HomePage.getRandomProduct ()
                HomePage.counterShouldHave ()
                HomePage.goToCart ()

                CartPage.shouldBeVisible ()
                CartPage.addOneMoreItem ()
                CartPage.goToCheckout ()

                CheckoutPage.shouldBeVisible ()

             const user = { firstName: 'John', lastName: 'Frusciante', postalCode: '123456789'}   

                CheckoutPage.form (user)
                CheckoutPage.submit ()
                CheckoutPage.itensShouldBeVisible ()
                CheckoutPage.finish ()

             const congratsTxt = "THANK YOU FOR YOUR ORDER"
                
                CheckoutPage.congratsShouldHaveTxt (congratsTxt)
                CheckoutPage.goBackToHome()
        })

    })

})