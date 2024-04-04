describe('Asenkron Test Örneği', () => {
  it('Doğru Bilgiler ile Giriş Yapma Test',  () => {
    // SauceDemo uygulamasını ziyaret et
    cy.visit('https://www.saucedemo.com/v1/index.html');

    // Başlık elementini kontrol et
    cy.get('.login_logo').should('be.visible');

    // Kullanıcı adı ve parola giriş elementlerini tanımla
    const usernameInput = cy.get('#user-name');
    const passwordInput = cy.get('#password');

    const username = 'standard_user';
    const password = 'secret_sauce'

    usernameInput.type(username);
    passwordInput.type(password);

    cy.get('#login-button').click();

    // Eğer kullanıcı giriş yapmışsa
    if (username === 'standard_user' && password === 'secret_sauce') {
      // Ürünü sepete ekle 
      cy.get('.inventory_item').first().find('.btn_primary').click();

      // Sepete git butonuna tıkla 
      cy.get('.shopping_cart_link').click();

      // Sepet sayfasına yönlendirildiğini doğrula ve sepetteki bilgileri doğrula
      cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack');
      cy.get('.inventory_item_price').should('contain', '29.99')
      cy.url().should('include', '/cart.html');
      

    } else {
      // Eğer kullanıcı giriş yapamamışsa, hata mesajının gösterildiğini kontrol et
      cy.get('h3[data-test="error"]').should('be.visible');
    }
  });
  it('Yanlış Bilgiler ile Giriş yapma ve Hata Mesajı Kontrol Testi',  () => {
    // SauceDemo uygulamasını ziyaret et
    cy.visit('https://www.saucedemo.com/v1/index.html');

    // Başlık elementini kontrol et
    cy.get('.login_logo').should('be.visible');

    // Kullanıcı adı ve parola giriş elementlerini tanımla
    const usernameInput = cy.get('#user-name');
    const passwordInput = cy.get('#password');
    const LoginButton = cy.get('#login-button')

    const username = 'standard_userr';
    const password = 'secret_saucer'

    usernameInput.type(username);
    passwordInput.type(password);

    LoginButton.click();

    // Eğer kullanıcı giriş yapmışsa
    if (username === 'standard_user' && password === 'secret_sauce') { // yanlış kullanıcı adı ile giriş yapma
      // Ürünü sepete ekle 
      cy.get('.inventory_item').first().find('.btn_primary').click();

      // Sepete git butonuna tıkla 
      cy.get('.shopping_cart_link').click();

      // Sepet sayfasına yönlendirildiğini doğrula ve sepetteki bilgileri doğrula
      cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack');
      cy.get('.inventory_item_price').should('contain', '29.99')
      cy.url().should('include', '/cart.html');
      

    } else {
      // Eğer kullanıcı giriş yapamamışsa, hata mesajının gösterildiğini kontrol et
      cy.get('h3[data-test="error"]').should('be.visible');
    }
  });
});
