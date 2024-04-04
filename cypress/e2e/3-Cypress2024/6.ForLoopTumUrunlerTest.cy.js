describe('Döngüler ile Ürünleri Sepete Ekleme Testi', () => {
    it('for döngüsü ile tüm ürünleri sepete ekle', () => {
      // Sayfayı ziyaret et
      const username = 'standard_user';
      const password = 'secret_sauce';
  
      // Sayfaya git
      cy.visit('https://www.saucedemo.com/v1/index.html');
  
      // Kullanıcı girişi yap
      cy.get('#user-name').type(username);
      cy.get('#password').type(password);
      cy.get('#login-button').click();
  
      // Ürün sayısını al
      let urunSayisi;
      cy.get('.inventory_item').its('length').then((length) => {
        urunSayisi = length;
  
        // for döngüsü ile ürünleri sepete ekle
        for (let i = 1; i <= urunSayisi; i++) {
          cy.get(`.inventory_item:nth-child(${i}) .inventory_item_name`).invoke('text').then((productName) => {
            cy.contains('.inventory_item_name', productName).click();
            cy.url().should('include', '/inventory-item.html');
            cy.get('.btn_inventory').click();
            cy.get('.shopping_cart_badge').should('contain', `${i}`);
            cy.go('back');
          });
        }
      });
    });
  });
  
  /*
cy.get('.inventory_item'): Cypress komutu olan get, belirli bir CSS sınıfına (inventory_item) sahip tüm HTML öğelerini seçer.
.its('length'): its fonksiyonu, bir önceki seçilen öğe setinin belirli bir özelliğini alır. Bu durumda, setin uzunluğunu (length) alır.
then((length) => { urunSayisi = length; }: then fonksiyonu, önceki adımda alınan uzunluğu bir callback fonksiyon içinde işler. 
Bu durumda, eleman sayısını urunSayisi adlı bir değişkene atar.
  */