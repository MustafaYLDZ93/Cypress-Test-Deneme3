const SaucedemoLoginElementsLocators = require('../../../fixtures/SaucedemoData.json')
export class SaucedemoLoginElementsActions{
    username(){
        return cy.get(SaucedemoLoginElementsLocators.Login.username_text).type("standard_user") 
    }
    password(){
        return cy.get(SaucedemoLoginElementsLocators.Login.password_text).type("secret_sauce")
    }
    LoginButon(){
        return cy.get(SaucedemoLoginElementsLocators.Login.login_buton).click()
    }
    LeftMenu(){
        return cy.get(SaucedemoLoginElementsLocators.Login.SolAcılırMenu).click()
    }
    LogoutButon(){
        return cy.get(SaucedemoLoginElementsLocators.Login.Logout_buton).click()
    }
    FakeUsername(){
        return cy.get(SaucedemoLoginElementsLocators.Login.username_text).type("standard_use")
    }
    password(){
        return cy.get(SaucedemoLoginElementsLocators.Login.password_text).type("secret_sauce")
    }
    LoginButon(){
       return cy.get(SaucedemoLoginElementsLocators.Login.login_buton).click()
    }
    ErrorMessage(){
        return cy.get(SaucedemoLoginElementsLocators.Login.Hata_Mesajı);
    }

}

