describe('Saucedemo Test Senaryosu', () => {
    it('Ürünleri Sepete Ekleyip Kontrol Et', () => {
      // Sayfaya git
      cy.visit('https://www.saucedemo.com/v1/index.html');
  
      // Kullanıcı bilgilerini tanımla
      const username = 'standard_user';
      const password = 'secret_sauce';
  
      // Kullanıcı girişi yap
      cy.get('#user-name').type(username);
      cy.get('#password').type(password);
      cy.get('#login-button').click();
  
      // Kullanıcının giriş yaptığından emin ol
      cy.get('.product_label').should('have.text', 'Products');
  
      // Her bir ürünü sepete ekle
      for (let i = 1; i <= 3; i++) {
        // Ürünü seç
        cy.get(`.inventory_item:nth-child(${i}) .inventory_item_name`).invoke('text').then((productName) => {
          cy.contains('.inventory_item_name', productName).click();
  
          // Seçilen ürünün detay sayfasında olduğunu doğrula
          cy.url().should('include', '/inventory-item.html');
  
          // Sepete ekle butonuna tıkla
          cy.get('.btn_inventory').click();
  
          // Ürünü sepete eklediğini doğrula
          cy.get('.shopping_cart_badge').should('contain', `${i}`);
        });
  
        // Sayfaya geri dön
        cy.go('back');
      }
  
      // Sepete git
      cy.get('.shopping_cart_link').click();
  
      // Sepetin içindeki ürün sayısını kontrol et
      cy.get('.cart_item').should('have.length', 3);
    });
  });
  
  
  
 /*
  Bu Cypress test senaryosu, bir döngü kullanarak bir e-ticaret sitesinde ürünleri seçip sepete eklemenin ve 
  ardından sepete gidip eklenen ürünlerin doğruluğunu kontrol etmenin basit bir örneğidir. İşte kodun adım adım açıklaması:

for döngüsü, 1'den 3'e kadar üç kez çalışacak.
Her döngü adımında, .inventory_item:nth-child(${i}) .inventory_item_name CSS selektörü ile belirli bir ürünün adını alır.
cy.contains('.inventory_item_name', productName).click(); ile bu ürünü seçer.
cy.url().should('include', '/inventory-item.html'); ile seçilen ürünün detay sayfasına yönlendirildiğini kontrol eder.
cy.get('.btn_inventory').click(); ile ürünü sepete ekler.
cy.get('.shopping_cart_badge').should('contain', ${i}); ile sepet ikonundaki ürün sayısını kontrol eder.
Döngüden çıktıktan sonra cy.go('back'); ile sayfaya geri döner ve bir sonraki ürüne geçer.
Döngü bittikten sonra, sepete gidip eklenen ürünlerin toplam sayısını kontrol eder. Bu örnekte, 3 farklı ürün seçildiği için 
cy.get('.cart_item').should('have.length', 3); ifadesiyle sepetin içindeki ürün sayısını kontrol eder.
*/