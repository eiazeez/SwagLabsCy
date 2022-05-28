import LoginPage from '../support/pages/login'
import HomePage from '../support/pages/home'

describe('login', function () {

    context('Quando o user é bom:', function () {

        const user = {
            username: 'standard_user',
            password: 'secret_sauce',
        }

        it('deve logar com sucesso', function () {
            LoginPage.go()
            LoginPage.form(user)
            LoginPage.submit()

            HomePage.shouldBeVisible()
        })

    })

    context('Quando o user é bom mas a senha é invalida:', function () {

        const user = {
            username: 'standard_user',
            password: 'senha inválida',
        }

        it('deve aparecer um aviso de user ou senha incorretos', function () {
            LoginPage.go()
            LoginPage.form(user)
            LoginPage.submit()

            const message = 'Epic sadface: Username and password do not match any user in this service'

            LoginPage.errorShouldHaveText(message)
        })

    })

    context('Quando o user é inválido', function () {

        const emails = [
            'az.mail.com.br',
            '@',
            '@mail.com.br',
            'az#mail.com.br',
            'az2mail.com',
            '123123',
            'kas123k5',
        ]

        before(function (){
            LoginPage.go()
        })

        emails.forEach(function (email) {
            it('não deve logar com o user: ' + email, function () {
                const user = { username: email, password: 'secret_sauce' }   

                LoginPage.form(user)
                LoginPage.submit()

                const message = 'Epic sadface: Username and password do not match any user in this service'
                
                LoginPage.errorShouldHaveText(message)
            })
        })
    })

    context('Quando o user está bloqueado:', function () {

        const user = {
            username: 'locked_out_user',
            password: 'secret_sauce',
        }

        it('deve aparecer um aviso que o user está bloqueado', function () {
            LoginPage.go()
            LoginPage.form(user)
            LoginPage.submit()

            const message = 'Epic sadface: Sorry, this user has been locked out.'

            LoginPage.errorShouldHaveText(message)
        })

    })

    context('Quando o user é problemático:', function () {

        const user = {
            username: 'problem_user',
            password: 'secret_sauce',
        }

        it('deve logar com a home diferente', function () {
            LoginPage.go()
            LoginPage.form(user)
            LoginPage.submit()

            HomePage.shouldBeVisible()
        })

    })

    context('Quando o user está com glitch de performance:', function () {

        const user = {
            username: 'performance_glitch_user',
            password: 'secret_sauce',
        }

        it('deve logar com atraso', function () {
            LoginPage.go()
            LoginPage.form(user)
            LoginPage.submit()

            HomePage.shouldBeVisible()
        })

    })

})