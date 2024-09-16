// function square(a){
//     return a**2;
// }
//   console.log(square(3));

  // const square=(x)=>{
  //  return  x**2;
  // }
  // console.log(square(3));

  //Arguments ---------------------------
// function square(x){
//   console.log(arguments);
//   console.log(arguments[2]);
//   }
// square(3,4,5)

// function square(...x){
//   console.log(x);
//   console.log(x[2]);
//   }
// square(3,4,5)



//Recursive--------------
// function recursive(a){
// console.log(a);
// if(a>0)
// recursive(a-1);
// }
// recursive(10);

//callback -------------------------------------

// function square(a){
// return a ** 2;
// }

// function deneme(x){
//  var sonuc= x(2);
//   console.log(sonuc);
  
// }
// deneme(square);

// Example---------------------------------

function test(a,callback){
  if(a%2 ===0 )
    return  callback(true) 
  else return  callback(false);

}
 function callback(x){
  if(x==true) {console.log("Girilen sayi çift")}
  else if(x==false){console.log("Girilen sayi tektir");} 
  
  
 }
 test(7,callback)  

 //recursive example
 function recursive(a){ 

  if(a==0) return 1;
  else return a*recursive(a-1);
    
 }
 console.log(recursive(5)) ;