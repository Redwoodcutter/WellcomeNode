const http = require('http'); // -> const http = required ('./http') şeklinde olsaydı local'de ki http.js dosyasına bakardı.

const servet = http.createServer((req, res) => {
    console.log(req);
});

// http. uzantısından sonra http sabiti için oluşturabileceğimiz propertiesleri görüntüleriz. bu kısımda createServer "RequestListener" adında bir argüment alır ve gelen her mesajı execute eder.
// yeni tip yapıda arrow function kullanmayı alışkanlık haline getir!
// bir server oluşturdun, req'i ekrana yazdın ama node app.js yazınca hiç bir şey gelmedi tabi.
// e haliyle bunuda bir sabite atman gerekecek const servet! server da olabilir çok mühim değil.

servet.listen(3000);
 // eee bir listener var kardeşim dedik.işte o listener bu listener. javascript bir yerden dışarı çıkıp uygulamayı patlatmak istemez. ama dinlemek anlamak çözmek ister.
// bu noktada da port ve host lazım olacak genelde portlar ya 3000 dir yada 8080 dir.

// bas uygulama yürüsün... node app.js ve elektrikler gidene kadar dinlenecek bir adres :: localhost:3000
// serveri oluşturduk gitti.


