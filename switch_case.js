var input=14;
var expression=(input%7==0) ? 7 : input%7;
var day;
switch (expression) {
    case 1: day="Pazartesi"
        
        break;
        case 2:  day="Salı"
        
        break;
        case 3:  day="Çarşamba"
        
        break;
        case 4:  day="Perşembe"
        
        break;
        case 5:  day="Cuma"
        
        break;
        case 6:  
        case 7: day="Hafta Sonu"
        
        break;
        
    default: day="Geçerli bir gün giriniz!!"
        break;
}
console.log(day);




