 function toplama(a, b) {
    return a + b;
  }
  
  // Fonksiyonu çağıralım
  var sonuc = toplama(5, 3);
  console.log("Toplam: " + sonuc);

//-----------------------------------------------
  function merhabaDunya() {
    console.log("Merhaba, Dünya!");
  }
  
  // Fonksiyonu çağıralım
  merhabaDunya();


  //----------------------------------------------

  var çarpma = function(x, y) {
    return x * y;
  };
  
  // Fonksiyonu çağıralım
  var çarpımSonucu = çarpma(4, 6);
  console.log("Çarpım: " + çarpımSonucu);

  //-------------------------------------------------
  //- İngilizce hali
  var multiply = function(x, y) {
    return x * y;
  };
  
  // Call the function
  var productResult = multiply(4, 6);
  console.log("Product: " + productResult);


//--------------------------------------------



  function toplamaVeÇarpma(a, b, c) {
    var toplam = a + b;
    var çarpım = function(x, y) {
      return x * y;
    };
  
    return çarpım(toplam, c);
  }
  
  // Fonksiyonu çağıralım
  var sonuç = toplamaVeÇarpma(2, 3, 4);
  console.log("Sonuç: " + sonuç);


//-----------------------------------------------


  // toplamaVeÇarpma adında bir fonksiyon tanımlanıyor. Bu fonksiyon üç parametre alıyor: a, b ve c.
function toplamaVeÇarpma(a, b, c) {
    // a ve b'nin toplamını hesapla ve sonucu 'toplam' adlı bir değişkende sakla.
    var toplam = a + b;
  
    // 'çarpım' adında iç içe bir fonksiyon tanımlanıyor. Bu fonksiyon iki parametre alıyor: x ve y.
    var çarpım = function(x, y) {
      // x ve y'nin çarpımını hesapla ve sonucu geri döndür.
      return x * y;
    };
  
    // 'çarpım' fonksiyonunu, 'toplam' ve 'c' parametreleri ile çağır ve sonucu geri döndür.
    return çarpım(toplam, c);
  }
  
  // toplamaVeÇarpma fonksiyonunu 2, 3 ve 4 argümanları ile çağır.
  var sonuç = toplamaVeÇarpma(2, 3, 4);
  
  // Sonucu konsola yazdır, "Sonuç: " ifadesi ile birlikte.
  console.log("Sonuç: " + sonuç);
  

//-----------------
function selamVer(isim, callback) {
    var mesaj = "Merhaba, " + isim + "!";
    callback(mesaj);
  }
  
  // Fonksiyonu çağıralım ve callback fonksiyonu kullanalım
  selamVer("Ahmet", function(mesaj) {
    console.log(mesaj);
  });