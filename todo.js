const readlineSync = require('readline-sync');
let gorevler=[];

function gorevEkle(){
const ad = readlineSync.question('Gorev adi: ');
const aciklama = readlineSync.question('Görev aciklamasi: ');
    
    const yeniGorev = {
        id: gorevler.length>0 ?  ((gorevler[gorevler.length-1].id)+1) : 1,
        ad: ad,
        aciklama: aciklama
    };

    gorevler.push(yeniGorev);
    console.log('Görev başarıyla eklendi!\n');}

    function gorevListele(){
        gorevler.forEach(gorev => {console.log(`ID: ${gorev.id} Ad: ${gorev.ad} Aciklama: ${gorev.aciklama}`);
        });
    }

    function gorevGuncelle(){
        gorevListele();
        const gorev_id= parseInt(readlineSync.question('Guncellemek istediginiz görevin ID sini girin: ')) ;
      const gorev=  gorevler.find((gorev)=>gorev.id===gorev_id)
      if(gorev){
        gorev.ad=readlineSync.question('Gorev adi: ');
        gorev.aciklama=readlineSync.question('Görev aciklamasi: ');
        console.log("Gorev basariyla guncellendi");
        
      }else console.log("Bu ID ye sahip bir gorev bulunamadi");

    }

    function gorevSil() {
        gorevListele();
        const id = parseInt(
          readlineSync.question("Silmek istediginiz gorevin ID'si: ")
        );
        const index = gorevler.findIndex((gorev) => gorev.id === id);
      
        if (index === -1) {
          console.log("Bu ID'ye sahip bir görev bulunamadi.\n");
          return;
        }
      
        gorevler.splice(index, 1);
        console.log(`${id} ID'li görev başariyla silindi`);
      }



      var secim;
   do {
 console.log("--- Todo Listesi Uygulamasi ---");
  console.log("1. Görev Ekle");
  console.log("2. Görev Listele");
  console.log("3. Görev Güncelle");
  console.log("4. Görev Sil");
  console.log("5. Cikis");
   secim = readlineSync.question("Bir islem secin: ");

  switch (secim) {
    case "1":
      gorevEkle();
      break;
    case "2":
      gorevListele();
      break;
    case "3":
      gorevGuncelle();
      break;
    case "4":
      gorevSil();
      break;
    case "5":
      console.log("Cikis yapiliyor...");
      process.exit();
    default:
      console.log("Geçersiz seçim, lütfen tekrar deneyin.\n");
  }
   } while (secim!==5);
