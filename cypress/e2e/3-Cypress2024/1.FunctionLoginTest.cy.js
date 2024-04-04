function loginUser(username, password) {
  cy.visit('https://www.saucedemo.com/v1/index.html'); // Giriş sayfasını ziyaret et

  cy.get('input#user-name').type(username); // Kullanıcı adı alanına yaz
  cy.get('input#password').type(password); // Şifre alanına yaz

  cy.get('input#login-button').click(); // Giriş yap butonuna tıkla
}

// Cypress test case
describe('Login Testi', () => {
  it('Should login with valid credentials', () => {
    // Fonksiyonu kullanarak giriş yap
    loginUser('standard_user', 'secret_sauce');

    // Girişin başarılı olduğunu kontrol et
    cy.url().should('include', '/v1/inventory.html'); // Örnek bir kontrol
    cy.get('.product_label').should('contain', 'Products'); // Örnek bir kontrol
    cy.get('.bm-burger-button').click()
    cy.wait(1000)
    cy.get('#logout_sidebar_link').click()
  });

  it('Should display an error message with invalid credentials', () => {
    // Fonksiyonu kullanarak hatalı giriş yap
    loginUser('invaliduser', 'invalidpassword');

    // Hata mesajının göründüğünü kontrol et
    cy.get('.error-button').should('be.visible');
    cy.get('div#login_button_container h3').contains('Username and password do not match any user in this service')
  });
});