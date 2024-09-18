//Date
// var time=new Date();
//var result= time.toLocaleDateString("tr-TR",{hour: "2-digit",minute:"2-digit", second:"2-digit"})

// var result=time.toLocaleTimeString("tr-TR")
// console.log(result);

//setTimeout -setInterval
var timeout=setTimeout(()=>{ //3 saniye sonra yazar

    console.log("test");
    
},3000)

var time=setInterval(()=>{ //3 saniye aralıklarla yazar
    
    console.log("test");
    
},3000)