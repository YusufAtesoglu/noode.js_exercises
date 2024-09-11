var ekmek="Ekmek"
var pasta ="Pasta"
var börek="Börek"
ekmek= ekmek.substring(0,3).toUpperCase()
pasta= pasta.substring(0,3).toUpperCase()
börek= börek.substring(0,3).toUpperCase()
var sonuc=`${ekmek}-${pasta}-${börek}`
console.log(sonuc);


//---------------------------------------------------------------------
var num=0;
if(num%2==0){
    console.log("Çift");
    
}else console.log("Tek");

//-----------------------------------------------------------------
var week_day=25
 week_day=week_day%12==0 ? 12 : week_day%12
 var month;
switch (week_day) {
    case 1: month="Ocak"; break;
    case 2: month="Şubat"; break;
    case 3: month="Mart"; break;
    case 4: month="Nisan"; break;
    case 5: month="Mayıs"; break;
    case 6: month="Haziran"; break;
    case 7: month="Temmuz"; break;
    case 8: month="Ağustos"; break;
    case 9: month="Eylül"; break;
    case 10: month="Ekim"; break;
    case 11: month="Kasım"; break;
    case 12: month="Aralık"; break;
    default: console.log("Geçerli bir ay giriniz !!!");
     break;
}
console.log(month);