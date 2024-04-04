function Login() {
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
cy.get('.oxd-button').click()
}

describe('Tarih Seçme Testi', () => {
    it('Farklı Tarihleri Seçme', () => {
      
      Login()

      const tarihDizisi = ['10', 'August', '2019']; // Seçmek istediğiniz tarih
      const [day, month, year] = tarihDizisi;

      const LeftMenu = cy.get('.oxd-sidepanel-body')
      LeftMenu.contains('Leave').click() // Sol Menüde "Leave" değerini içeren elemente tıklar.
      
      const TextDogrulama = cy.get('.oxd-table-filter-header-title > .oxd-text')
      TextDogrulama.should('have.text', 'Leave List') // Sayfadaki "Leave List" değerini içeren element olup olmadığını doğrualama


      const Calendar = cy.get('div#app div:nth-child(1) > div > div:nth-child(2) > div > div > i')
      Calendar.click()

      const CalendarDateSelect = cy.get('div#app div.oxd-date-input-calendar > div')
      CalendarDateSelect.contains('11').click() 
      cy.scrollTo('top');

      const DateVerification = cy.get('div#app div:nth-child(1) > div > div:nth-child(1) > div > div:nth-child(2) > div > div > input')
      DateVerification.should('have.value', '2024-11-04')

      cy.get('div#app div:nth-child(1) > div > div:nth-child(2) > div > div > i').click() // açılır takvim
      cy.get('div#app li.oxd-calendar-selector-year > div > p')
       .click()
       .then(() => {
       cy.contains(year).click() // Dizilerden 2019 yılını seçer

      });
      
      cy.get('div#app li.oxd-calendar-selector-month > div > p') // aylar listesin tıklama 
         .click()
         .then(() => {
            // Tıklama işlemi bittiğinde bu blok çalışır
            cy.contains(month).click(); // "August" içeren bir elemente-aya tıklar
            cy.scrollTo('top');
          });
        cy.get('div#app li.oxd-calendar-selector-month > div > p') // aylar listesine tıklama
         .click()
         .then(() => {
            cy.get('div#app div.oxd-date-input-calendar > div').contains(day).click() // 10 değeri içeren elemente tıklama
            cy.scrollTo('top');
            cy.get('div#app div:nth-child(1) > div > div:nth-child(1) > div > div:nth-child(2) > div > div > input').should('have.value', '2019-10-08') // seçilen değeri doğrualama

          });
    });
  });
  