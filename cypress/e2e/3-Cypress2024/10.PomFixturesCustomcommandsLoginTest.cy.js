/// <reference types="cypress" />
import{SaucedemoLoginElementsActions} from "../../PageObjects/PageActions/SaucedemoActions/SaucedemoLoginActions"
const SaucedemoLogin = new SaucedemoLoginElementsActions

describe('Page Object Model ile Test', () => {
    it('POM ile Başarılı ve Başarısız Login ve Hata Mesajı Doğrulama Testi ', () => {
      cy.visit('https://www.saucedemo.com/v1/index.html')

      SaucedemoLogin.username();
      SaucedemoLogin.password();
      SaucedemoLogin.LoginButon();
      SaucedemoLogin.LeftMenu();
      cy.wait(1000);
      SaucedemoLogin.LogoutButon();
      SaucedemoLogin.FakeUsername();
      SaucedemoLogin.password();
      SaucedemoLogin.LoginButon()
      SaucedemoLogin.ErrorMessage().contains("Username and password do not match any user in this service")
    });
    
    it('Fixture ile Custom Command kullanarak Login Testi', () => {
      
      cy.LoginAndAddToChartFixtureAndCustomCommand()
      
     
     
    });

    it('Custom Commands ve POM ile Yanlış Giriş Hata Mesajı Testi', () => {
      cy.WrongUsernameErrorMessageCustomCommandsAndPOM()
      
     
     
    });

});
