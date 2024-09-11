//String toplama
var a="test";
var b="merhaba";
var c=`${a} test2 ${b} ${3+5} test3 `
console.log(c)


//Stringlerin belli bir karakterini alma

var a="test"
//console.log(a[3]);
//console.log(a.charAt(2));

//Stringlerin belli bir karakterinin indexini bulma
var b="merhaba dünya"
//console.log(b.indexOf("a"));
//console.log(b.indexOf("a",5)); //5.indexten saymaya başlayark bana a harfinin indexini bul
//console.log(b.lastIndexOf("a"));//son a harfinin kaçıncı indexte olduğunu bul
//console.log(b.lastIndexOf("a",11)); //11. index e kadar son a harfini ara

//Kontrol
//console.log(b.startsWith("ba",5));
//console.log(b.endsWith("dün",10)); //10.index dahil değil false döner
//console.log(b.endsWith("dün",11));


//içerip içermeme kontrolu
console.log(b.includes("dünya"));

//String parçalama
console.log(b.slice(1,3)); //1.ve 3. index arasını al ama 3 dahil değil
var c="!seLam"
// console.log(c.slice(1));
// console.log(c.substring(1));
// console.log(c.substring(1,5));

//büyük küçük harf çevirme
// console.log(c.toUpperCase());
// console.log(c.toLowerCase());

//boşluları kaldırma
var d="   test    "
console.log(d.trim());

var e="deneme"
e[0]="b"; //stringler bu şekilde değiştirilemezler
 console.log(e);
console.log(e.length); //stringin uzunluğunu alma




