import { SaucedemoLoginElementsActions } from "../PageObjects/PageActions/SaucedemoActions/SaucedemoLoginActions";
const SaucedemoLogin = new SaucedemoLoginElementsActions

Cypress.Commands.add("WrongUsernameErrorMessageCustomCommandsAndPOM", () => {
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


  Cypress.Commands.add("LoginAndAddToChartFixtureAndCustomCommand", (SaucedemoData) => {
    cy.visit('https://www.saucedemo.com/v1/index.html')  
    cy.fixture("SaucedemoData").then((Data) => {
    
      cy.get(Data.Login.username_input).type(Data.Login.username);
      cy.get(Data.Login.password_input).type(Data.Login.password);
      cy.get(Data.Login.login_buton).click()
      cy.wait(1000)
      cy.get(Data.Chart.AddToChart).click()
      cy.wait(1000)
      cy.get(Data.Chart.AddToChart).contains('REMOVE')
      cy.scrollTo("top");
      cy.get(Data.Chart.ShoppingCartSvg).click()
       
   
    });
  });
