// var list =[1,"test","5",3]
// console.log(list)

// list.push("son")
// console.log(list)

// list.splice(4,1)
// console.log(list)

// var list1=list;
// list1.push("deneme") //burada referans tutucu olduğundan list1 deki değişim listi de etkiler
// console.log(list);
//----------------------------------------------------------------------------------------------------
// var test="merhaba dünya nasılsın"
// var response=test.split(" ")
// console.log(response)
//-----------------------------------------------------------------------------------------------------

//Array metodları
var list=["Ayşe","Ahmet","Efe",1,5]
// list[1]="Ece"
// console.log(list);

//includes()
// console.log(list.includes("Ahmt"));//false
// console.log(list.includes("Ahmet")); //true

//indexof()-lastindexof()
// console.log(list.indexOf(1));
// console.log(list.lastIndexOf("Ahmet"));

//splice - slice --> slice da değişkenin kendisi değişmez yeni bir değişkene atarsınız, splice da değişkenin kendisi değişir
//list.splice(2,2) //kesilen elemanlardan sonra kalan dizi
// list=list.splice(2,2) //lesstiği elemanllar
// list.splice(2,0,2) //2.indexe 2 ekle
// console.log(list);

// list=list.slice(1,4) //1.indexten başla 3. index e kadar kes ve kesilen elemanları al
// console.log(list);




