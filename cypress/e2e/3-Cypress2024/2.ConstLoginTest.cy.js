describe('Değişken Kullanımı ile Test Senaryosu', () => {
    it('Kullanıcı Girişi ve Ürün Seçimi', () => {
      // Kullanıcı bilgilerini tanımla
      const username = 'standard_user';
      const password = 'secret_sauce';
  
      // Sayfaya git
      cy.visit('https://www.saucedemo.com/v1/index.html');
  
      // Kullanıcı girişi yap
      cy.get('#user-name').type(username);
      cy.get('#password').type(password);
      cy.get('#login-button').click();
  
      // Kullanıcının giriş yaptığından emin ol
      cy.get('.product_label').should('contain', 'Products');
  
      // Ürün seçimi yap
      const selectedProduct = 'Sauce Labs Backpack';
      cy.contains('.inventory_item_name', selectedProduct).click();
  
      // Seçilen ürünün detay sayfasında olduğunu doğrula
      cy.url().should('include', '/inventory-item.html');
  
      // Sepete ekle butonuna tıkla
      cy.get('.btn_primary').click();
  
      // Sepet sayfasına git
      cy.get('.shopping_cart_link').click();
  
      // Sepetin içinde seçilen ürünün bulunduğunu doğrula
      cy.get('.inventory_item_name').should('contain', selectedProduct);
    });
  });
  