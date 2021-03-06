import LoginPage from './pages/login'
import HomePage from './pages/home'

Cypress.Commands.add('login', function (user) {
    LoginPage.go()
    LoginPage.shouldBeVisible()
    LoginPage.form(user)
    LoginPage.submit()

    HomePage.shouldBeVisible()
})