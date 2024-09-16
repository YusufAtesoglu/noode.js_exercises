//reduce()----------------------------------------------------------
// var list=[1,2,5,4,7]
// var result=list.reduce((response,current)=> response+current,0);
// console.log(result);

// var list=["a","b","g","b","a","c","a","g","a"]

// var result=list.reduce((response,current) =>{
//     response[current]= (current in response) ?  response[current] +1: 1
//     return response
// },{})
//  console.log(result);
 
var list=[4,5,7,2,9,3]

// var result=list.some(e => e >8)
var result=list.every(e => e >8)
console.log(result);
