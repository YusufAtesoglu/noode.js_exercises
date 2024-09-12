//for loop
// var count =10;
// var text="";

// for(var i=0; i<=count; i++){
//     var add_text="*".repeat(i);
//     text+=`${add_text}\n`
// }
// console.log(text);

//while döngüsü
// var i=0;
// while(i<5){
//     console.log(i);
//     i++;
// }
//-----------------------------------------------
// for ve while döngüsünü kllanarak 7 ve 9 a tam bölünebilen ilk 5 sayıyı bulunuz. BUlduğunuz sayıları bir dizi içcerisinde ttup ekrana yazdırınız
// var number=1;
// var found_number=[];
// for(var i=0; i<5; i++){
//     while(number%7!=0 || number%9!=0 ){
// number++;
//     }
//     found_number.push(number);
//     number++;
// }
// console.log(found_number)
//-------------------------------------------------------------

//do-while
var kazananlar=[1,5]
do {
    var random=Math.floor(Math.random()*10)
} while (kazananlar.includes(random));
kazananlar.push(random);
 console.log(kazananlar);
 