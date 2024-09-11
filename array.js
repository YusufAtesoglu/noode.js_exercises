var list =[1,"test","5",3]
console.log(list)

list.push("son")
console.log(list)

list.splice(4,1)
console.log(list)

var list1=list;
list1.push("deneme") //burada referans tutucu olduğundan list1 deki değişim listi de etkiler
console.log(list);
