describe('Example API Test', () => {
    it('500 hata kodu sorgulama', () => {
      cy.request({
        method: 'GET',
        url: 'http://httpstat.us/500',
        failOnStatusCode: false, // 2xx veya 3xx durum kodları hataya neden olmasın
      }).then((response) => {
        // Başarılı bir istek beklenmez, isteğin başarısız olduğunu kontrol et
        expect(response.status).to.eq(5000);
        expect(response.body).to.contain('Internal Server Error'); // İstenirse içerik kontrolü yapılabilir
      });
    });
    it('200 durum kodu sorgulama', () => {
        cy.request({
          method: 'GET',
          url: 'https://www.saucedemo.com/v1/index.html',
          failOnStatusCode: false, // 2xx veya 3xx durum kodları hataya neden olmasın
        }).then((response) => {
          // Başarılı bir istek beklenmez, isteğin başarısız olduğunu kontrol et
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.lessThan(300);
          
          
        });
      });
      it('401 durum kodu sorgulama', () => {
        cy.request({
          method: 'GET',
          url: 'http://httpstat.us/401',
          failOnStatusCode: false, // 2xx veya 3xx durum kodları hataya neden olmasın
        }).then((response) => {
          // Başarılı bir istek beklenmez, isteğin başarısız olduğunu kontrol et
          expect(response.status).to.eq(401);
          expect(response.body).to.contain('Unauthorized'); // İstenirse içerik kontrolü yapılabilir
        });
      });
      it('POST isteği ile yeni bir veri oluşturma ve 201 durum kodu doğrulama', () => {
        // POST isteği için kullanıcı verileri
        const userData = {
          name: 'John Doe',
          job: 'Software Engineer',
        };
    
        // POST isteği yapma
        cy.request({
          method: 'POST',
          url: 'https://reqres.in/api/users',
          body: userData,
        }).then((response) => {
          // Başarılı bir istek beklenir (status code 201)
          expect(response.status).to.eq(201);
    
          // Yanıtın içinde oluşturulan kullanıcının bilgilerini kontrol etme
          expect(response.body).to.have.property('name', userData.name);
          expect(response.body).to.have.property('job', userData.job);
          
          expect(response.body).to.have.property('createdAt').to.be.a('string');
        });
      });
      it('GET isteği ile bilgileri kontrol etme', () => {
        // GET isteği yapma
        cy.request('GET', 'https://reqres.in/api/users/1').then((response) => {
          // Başarılı bir istek beklenir (status code 200)
          expect(response.status).to.eq(200);
    
          // Yanıtın içinde kullanıcının bilgilerini kontrol etme
          expect(response.body).to.have.property('data');
          expect(response.body.data).to.have.property('id').to.be.a('number');
          expect(response.body.data).to.have.property('id', 1);
          
          expect(response.body.data).to.have.property('email', 'george.bluth@reqres.in');
          expect(response.body.data).to.have.property('first_name', 'George');
          expect(response.body.data).to.have.property('last_name', 'Bluth');
          expect(response.body.data).to.have.property('avatar').to.be.a('string');
        });
      });
      it('404 Kodu doğrulama ', () => {
        cy.request({
          method: 'GET',
          url: 'https://reqres.in/api/users/23',
          failOnStatusCode: false, // 2xx veya 3xx durum kodları hataya neden olmasın
        }).then((response) => {
          // Başarılı bir istek beklenmez, isteğin başarısız olduğunu kontrol et
          expect(response.status).to.eq(404);
          expect(response.body.data).to.contain({});
         
        });
      });
     
      it('should validate user information for each user using GET request', () => {
        // GET isteği yapma
        cy.request('GET', 'https://reqres.in/api/users?page=2').then((response) => {
          // Başarılı bir istek beklenir (status code 200)
          expect(response.status).to.eq(200);
    
          // Yanıtın içinde kullanıcı bilgilerini kontrol etme
          expect(response.body).to.have.property('data').to.be.an('array');
    
          // Her bir kullanıcı öğesi için doğrulama yapma
          response.body.data.forEach((user, index) => {
            // İlgili kullanıcı bilgilerini kontrol etme
            cy.log(`Checking details for user ${index + 1}`);
            expect(user).to.have.property('id').to.be.a('number');
            expect(user).to.have.property('email').to.be.a('string');
            expect(user).to.have.property('first_name').to.be.a('string');
            expect(user).to.have.property('last_name').to.be.a('string');
            expect(user).to.have.property('avatar').to.be.a('string');
            
            // İlgili kullanıcının detayları ekrana yazdırılır
            cy.log(`User ${index + 1} Details:
              - ID: ${user.id}
              - Email: ${user.email}
              - First Name: ${user.first_name}
              - Last Name: ${user.last_name}
              - Avatar: ${user.avatar}
            `);
          });
        });
      


      });

  });


  