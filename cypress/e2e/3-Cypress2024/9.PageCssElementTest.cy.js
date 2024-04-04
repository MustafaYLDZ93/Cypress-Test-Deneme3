describe('Cypress Assert Örneği', () => {
  xit('Belirli Bir Elementin Varlığını Kontrol Etme', () => {
    // Saucedemo sayfasına git
    cy.visit('https://www.saucedemo.com/v1/index.html');

    const LoginLogoElement = cy.get('.login_logo')

    // Belirli bir elementin varlığını kontrol et
    LoginLogoElement.should('exist');
    LoginLogoElement.should('have.css', 'width', '985px'); // genişlik
    LoginLogoElement.should('have.css', 'length', '370'); // uzunluk
    LoginLogoElement.should('have.css', 'color', 'rgb(74, 74, 74)');


    const LoginWrapperInnerElement = cy.get('.login_wrapper-inner')

    LoginWrapperInnerElement.should('exist');
    LoginWrapperInnerElement.should('have.css', 'width', '689.5px');
    LoginWrapperInnerElement.should('have.css', 'length', '370'); // uzunluk
    
    const LoginButtonContainerElement = cy.get('#login_button_container')

    LoginButtonContainerElement.should('exist');
    LoginButtonContainerElement.should('have.css', 'width', '330.953125px'); // genişlik
    LoginButtonContainerElement.should('have.css', 'length', '370'); // uzunluk


    cy.get('.login_credentials_wrap-inner').should('exist');
    cy.get('.bot_column').should('exist');
    cy.get('#login-button').should('be.enabled').and('have.length', 1);
    cy.get('[data-test="username"]').should('have.length', 1);
    cy.get('form').should('have.css', 'width', '330.953125px'); // genişlik
    cy.get('form').should('have.css', 'length', '370'); // uzunluk
    cy.get('.login_wrapper').should('have.css', 'width', '985px'); // genişlik
    cy.get('.login_wrapper').should('have.css', 'length', '370'); // uzunluk
    cy.get('.login_credentials_wrap').should('have.css', 'width', '985px'); // genişlik
    cy.get('.login_credentials_wrap-inner').should('have.css', 'width', '689.5px');
    cy.get('.login_credentials_wrap-inner').should('have.css', 'length', '370'); // uzunluk
    cy.get('#login_credentials > h4').should('have.text', 'Accepted usernames are:');
    cy.get('[data-test="username"]').should('have.text', '');

    const LoginButtonElement = cy.get('#login-button')

    LoginButtonElement.should('have.value', 'LOGIN');
    LoginButtonElement.should('have.css', 'width', '91.9375px'); // genişlik
    LoginButtonElement.should('have.css', 'length', '370'); // uzunluk
    LoginButtonElement.should('have.css', 'color', 'rgb(255, 255, 255)'); // renk


  

    // Alternatif olarak, expect() kullanarak da kontrol edebilirsiniz
    cy.get('.login_logo').should(($element) => {
      expect($element).to.exist;
    });
    cy.get('.login_logo').invoke('css', 'width').then((width) => {
      expect(width).to.equal('985px');
    });
    cy.get('.login_logo').invoke('css', 'length').then((length) => {
      expect(length).to.equal('370');
    });
    cy.get('.login_logo').invoke('css', 'color').then((color) => {
      expect(color).to.equal('rgb(74, 74, 74)');
    });
    cy.get('#login-button').should(($button) => {
      expect($button).to.be.enabled;
    });


  });
});

function LoginButtonElementTest() {
  cy.visit('https://www.saucedemo.com/v1/index.html'); // Giriş sayfasını ziyaret et

  const LoginButtonElement = cy.get('#login-button')

    LoginButtonElement.should('have.value', 'LOGIN');
    LoginButtonElement.should('have.css', 'width', '91.9375px'); // genişlik
    LoginButtonElement.should('have.css', 'length', '370'); // uzunluk
    LoginButtonElement.should('have.css', 'color', 'rgb(255, 255, 255)'); // renk
}
describe('Login Buton Elementleri Testi', () => {
  xit('Tüm Elementleri tek bi fonksiyon ile test etme ', () => {
    // Fonksiyonu kullanarak giriş yap
    LoginButtonElementTest();

  });
});