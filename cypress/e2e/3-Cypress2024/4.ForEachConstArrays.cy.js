describe('For Döngüsü ile Oturum Açma Test', () => {
    const kullaniciBilgileri = [
      { kullaniciAdi: 'standard_user', sifre: 'secret_sauce' },
      { kullaniciAdi: 'YanlisAd', sifre: 'YanlisSifre' }, // yanlış kullanıcı adı 
      
    ];
  
    it('Farklı Kullanıcı Bilgileriyle Oturum Açma', () => {
      // Sayfayı ziyaret et
      cy.visit('https://www.saucedemo.com/v1/index.html');
  
      // Her bir kullanıcı bilgisi ile oturum açmayı dene
      kullaniciBilgileri.forEach((kullanici) => {
        cy.get('input#user-name').type(kullanici.kullaniciAdi);
        cy.get('input#password').type(kullanici.sifre);
        cy.get('input#login-button').click();
  
        if (kullanici.kullaniciAdi === 'standard_user' && kullanici.sifre === 'secret_sauce') {
          // Oturum açıldığını kontrol et
          cy.url().should('include', '/inventory.html');
          cy.get('.inventory_item').first().find('.btn_primary').click();
  
          // Sepete git butonuna tıkla 
          cy.get('.shopping_cart_link').click();
    
          // Sepet sayfasına yönlendirildiğini doğrula ve sepetteki bilgileri doğrula
          cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack');
          cy.get('.inventory_item_price').should('contain', '29.99')
          cy.url().should('include', '/cart.html');
          cy.get('.bm-burger-button > button').click()
          cy.get('a#logout_sidebar_link').click();
        } else {
          // Hata mesajı elementinin görünürlüğünü kontrol et
          cy.get('[data-test="error"]').should('be.visible');
          cy.get('div#login_button_container h3').contains('Username and password do not match any user in this service')
          
        }
  
      });
    });
  });
  