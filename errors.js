//callback
// function getuserData(id,callback){
// var user =undefined;
// if(!user) return callback(new Error("User not found"))

//     callback(null,user)
// }

// getuserData(1,(err,user) =>{
//     if(err) console.log(err);

//     console.log(user);
    
    
// })

//try-catch-finally
try { 
    console.log("Try bloğu");
throw new Error("Hata!!")
    
} catch (error) {
    console.log("Cath bloğu",error);


}finally{console.log("Bitti");} 
