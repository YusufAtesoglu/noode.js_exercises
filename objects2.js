// var user={
//     name:"Yusuf Ateşoğlu",
//     age:"25"
   
//  }
//  var street=(user?.address?.street) ? user.address.street : "Adres Bulunamadı"
// var street=user.address.street // hata verir 
//  var street=user?.address?.street // soru işareti ekleresek undefined verir
//  console.log(street);
 //---------------------------------

// var data1={name:"Yusuf"}
// var data2={age:25}
// var result={...data1,...data2}
// var result=Object.assign(data2,data1)
// console.log(result);

//----------------------------------------------------------------------------
//mutable - immutable

var data={
    name:  "Yusuf",
    age:20,
    address:{
        street:"X street",
        no:10
    }
}
// var data1={...data}; data1.age=15; console.log(data1.age);
// data1.address.street="Y street" ; console.log(data1.address.street);
//Deep Copy 


// var data2=JSON.parse(JSON.stringify(data));
// data2.name="Mehmet"
// data2.address.street="Y street"
// console.log(data);
// console.log(data2);









 