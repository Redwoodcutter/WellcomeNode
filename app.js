const http = require('http'); // -> const http = required ('./http') şeklinde olsaydı local'de ki http.js dosyasına bakardı.
const fs = require('fs'); // sabite fs dedim nedeni filesystem kütüphanesini cağirmiş olmam.

const servet = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Mesajını Yaz</title></head>');
        res.write('<body><form action="/message" method="POST"> <input type="text" name="message"> <button type="submit">Yolla</button></input> </form></body>')
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST'){ // method post ve url message ise bu if'i geçerli kıll.
        fs.writeFileSync('message.txt', 'DANDİRİK DATA'); // Message.txt dosyası oluşturarak içerisine dandirik data yazması talebi. 
        res.statusCode = 302; // redirection status kodu
        res.setHeader('Location', '/');
        return res.end(); // return çünkü aşağıdaki kod blogundan devam etmek istiyoruz.
    }
    res.setHeader('Content-Type', 'text/html '); // Bu komut header kısmına Content-type text/html olan meta data ekleyerek, içeriğin bir kısmının html olabileceğini işaret eder.
    // bu header alanı sadece belirli tipleri destekler. aslında browserin anlayacağı typelari destekler.
    res.write('<html>');
    res.write('<head><title>Benim Sayfam</title></head>');
    res.write('<body><h1> Nabersiniz ? </h1></body>');
    res.write('</html>');
    res.end();
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



