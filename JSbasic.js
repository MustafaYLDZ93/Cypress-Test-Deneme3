 
 /* Data Types (Değer içerebilen 5 farklı veri türü)

 string
 number
 boolean
 object
 function

 
 
 *3 tür nesne vardır

 Object
 Date
 Array

 *Değer içeremeyen 2 tarih türü
 
 null
 undefined
 
 */
 
 var firstname = "Mustafa" // string
 var doğumyılı = 25 // number
 var Oevli = true //boolean
 var EvlilikYılları = null // null
 var ArabaSayıları = undefined // undefined


 
console.log("Hello World")  // Consele.log()

//Variables  ( Değişkenler) ///
var firstName = "John"
var lastName = "Smith"
console.log(firstName)
console.log(lastName)

//
var age, dateOfBirth, sex
age = "5"
sex = "Male"
console.log(age)

//
var x = 5;
var y = 10;
var toplam = x + y;
console.log(toplam)
//----

// constansts ( Sabitler) ///
const meslek = "Tester"
console.log(meslek)
//----


// Concatenation - interpolation ( Birleştirme - enterpolasyon) ///

var price = 50
var itemName = "Cup"
var mesajPrint = "The price for your "+itemName+" is 50 dollars."    //Concatenation
var mesajPrint2 = `The price for your ${itemName} is ${price}  dollars.` // interpolation

console.log(mesajPrint)
console.log(mesajPrint2)

var firstname = "Mustafa";  
var lastname = "Yildiz";
console.log(firstname,lastname)  //Concatenation


//----

/// Objects (Nesneler) ///

var customer = {
    firstName: "john",
    lastName: "smith",
    cars: ["Volvo", "Toyota", "Tesla"]

}

console.log(customer.firstName)
console.log(customer.firstName+" "+customer.lastName+" "+customer.cars)
console.log(`${customer.firstName} ${customer.lastName}`);
//----

//Arrays (Diziler) ///

var customer = {
    cars: ["Volvo", "Toyota", "Tesla"]

}

console.log(customer.cars[0])
 //-----------------------------


/// Operators - aritmetic,increment,decremental (aritmatik,artan,azalan Operatörler)

/*

aritmatik

+ = sum (toplama)
- = sub (çıkarma)
* = mul (çarpma)
/ = div (bölme)
% = remainder (kalan)

*/

var num1 = 5
var num2 = 3
console.log(num1+num2)
console.log(num1-num2)
console.log(num1*num2)
console.log(num1/num2)

/*
increment,decremental (artan,azalan Operatörler)

++ --> increment
--  --> decrement


*/

var i=10
i++
i--
console.log(i)



/// Relational and Equality operators   (İlişkisel ve Eşitlik operatörleri) ///

//Relational
// > - more than  (bundan fazla)
// < - less than   (daha az)
// >= - more than equal  ( eşitten fazla)
// <= less than equal  (eşitten az)

var result = 5 > 4    // doğru
console.log(result)

var result = 4 < 5  // doğru
console.log(result)

var result = 4 > 5 // yanlış
console.log(result)

var result = 5 >= 5
console.log(result)

var result = 4 <= 4
console.log(result)

var result = 6 >= 5
console.log(result)

var result = 5 <= 6
console.log(result)

var i=20
var j=30
var result = i<j

console.log(result)

/// Equality operators ///
/*
= assignment operator (atama operatörü)
== compares the value (değeri karşılaştırır)


*/

var i = 10
var j = 20
console.log(i==j) ///false

var i = 10
var j = 10
console.log(i==j) ///true

var i = 10
var j = 20
console.log(i!==j) ///false

//----

/// Logical Operators (mantıksal operatörler)  ///

// "AND"
//AND
console.log(true && true)  // tüm değerler true olursa ifade doğru olacaktır.
console.log(true && false) // 1 i yanlış olursa ifade yanlış olacaktır.

var yaş18denfazla = true
var TurkVatandası = true

var SürücüBelgesineUygunluk = yaş18denfazla && TurkVatandası
console.log(' Bu müşteri sürücü belgesine uygun: ' + SürücüBelgesineUygunluk)

//

var yaş18denfazla = false
var TurkVatandası = true

var SürücüBelgesineUygunluk = yaş18denfazla && TurkVatandası
console.log(' Bu müşteri sürücü belgesine uygun: ' + SürücüBelgesineUygunluk)



// OR
console.log(true || false) // Herhangi değer true olursa ifade true olacaktır.

var yaş18denfazla = true
var TurkVatandası = false

var SürücüBelgesineUygunluk = yaş18denfazla || TurkVatandası
console.log(' Bu müşteri sürücü belgesine uygun: ' + SürücüBelgesineUygunluk)



// NOT !
console.log(6 !== 10)
//----


/// Conditional statement ( Koşullu ifade) ///

var isLoggedIn = false;


if (!isLoggedIn) {   // ! not ile beraber kullanımı ters işlem
  console.log("İçeriğe erişmek için lütfen giriş yapın.");
} else {
  console.log("Siteye Hoşgeldin!");
}

/*var isLoggedIn = false;: isLoggedIn adlı bir değişken oluşturulur ve başlangıçta değeri false olarak atanır. 
Bu durum, kullanıcının giriş yapmadığı anlamına gelir.
if (!isLoggedIn) {: if ifadesi ile kontrol yapılır. ! (not) operatörü, isLoggedIn değişkeninin değerini tersine çevirir. 
Yani, eğer isLoggedIn false ise !isLoggedIn true olur. Bu durumda, if bloğu çalıştırılır.
console.log("Please log in to access the content.");: Eğer kullanıcı giriş yapmamışsa (yani isLoggedIn değeri false), bu satırda bulunan mesajı konsola yazdırır.
} else {: Eğer kullanıcı giriş yapmışsa (yani isLoggedIn değeri true), else bloğu çalıştırılır.
console.log("Welcome to the website!");: Eğer kullanıcı giriş yapmışsa, bu satırda bulunan mesajı konsola yazdırır.
*/

// Yukarıdaki Kod bloğunun NOT olmadan ki hali
var OturumAcıldı = true;

// Eğer kullanıcı giriş yapmamışsa mesajı göster
if (OturumAcıldı) {
  console.log("Siteye Hoşgeldin.");
} else {
  console.log("İçeriğe erişmek için lütfen giriş yapın!"); // Eğer kullanıcı giriş yapmamışsa  bu mesajı göster
}
//----

var saat = 5

if (saat >= 6 && saat < 12 ){
    console.log('Günaydın')
} else if ( saat >=12 && saat < 18){
    console.log('İyi Öğlen Arası')
}else {
    console.log('İyi Akşamlar')
}
//----

var a=4
var b=10
var c=a+b
console.log(c)

if(a<b){
    console.log('B en büyüktür')
}else{
    console.log("A en büyüktür")
}

//-----


var a=10
var b=10
var c=a+b
console.log(c)

if(a<b){
    console.log('B en büyüktür ' +b)
}else if(a>b){
    console.log("A en büyüktür "+a)


}else{
    console.log("İkiside Eşittir")
}



//-----

var yaş18denfazla = true
var TurkVatandası = true

if(yaş18denfazla && TurkVatandası){
    console.log('Bu müşteri sürücü belgesine uygun')
} else {
    console.log('Bu müşteri sürücü belgesine uygun DEĞİL')
}
//----

var yaş18denfazla = true
var TurkVatandası = false

if(yaş18denfazla && TurkVatandası){
    console.log('Bu müşteri sürücü belgesine uygun')
} else {
    console.log('Bu müşteri sürücü belgesine uygun DEĞİL')
}


// Switch statements (anahtar ifadeleri)
var gün = "pazar";

switch (gün) {
  case "pazartesi":
    console.log("Haftaya başlangıç!");
    break;
  case "çarşamba":
  case "perşembe":
    console.log("Orta hafta!");
    break;
  case "cumartesi":
  case "pazar":
    console.log("Hafta sonu!");
    break;
  default:
    console.log("Geçersiz gün!");
}

//-


var meyve = "elma";

switch (meyve) {
  case "elma":
    console.log("Elma seçildi.");
    break;
  case "armut":
    console.log("Armut seçildi.");
    break;
  case "portakal":
    console.log("Portakal seçildi.");
    break;
  default:
    console.log("Belirtilen meyve bulunamadı.");
}

//-

var seçim = "2";

switch (seçim) {
  case "1":
    console.log("İlk seçenek seçildi.");
    break;
  case "2":
    console.log("İkinci seçenek seçildi.");
    break;
  case "3":
    console.log("Üçüncü seçenek seçildi.");
    break;
  default:
    console.log("Geçersiz seçim!");
}

//-

var oyunDurumu = "seviye geçildi";

switch (oyunDurumu) {
  case "oyun başladı":
    console.log("Oyun başladı. İlk seviyeye hoş geldiniz!");
    break;
  case "seviye geçildi":
    console.log("Tebrikler! Bir sonraki seviyeye geçtiniz.");
    break;
  case "oyun bitti":
    console.log("Oyun bitti. Teşekkür ederiz!");
    break;
  default:
    console.log("Bilinmeyen oyun durumu!");
}
/*
Temel Javascript:

Değişkenler, veri tipleri ve operatörler
Fonksiyonlar, parametreler ve return değerleri
Koşullu ifadeler (if, else, switch)
Döngüler (for, while, do-while)
Nesneler ve diziler
DOM manipülasyonu (querySelector, getElementById, etc.)
*/




