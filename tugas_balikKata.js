function balikKata(kata){
      var kataBaruDibalik = "";

      var i = kata.length-1;
      while(i>=0){
        kataBaruDibalik += kata[i];
        i--;
      }

      // for(var i=kata.length -1;i>0;i--){
        // kataBaruDibalik += kata[i];
      // }
      return kataBaruDibalik;
}

console.log(balikKata("Niomic!"))
console.log(balikKata("JavaScript"))
console.log(balikKata("alohahola"))
console.log(balikKata("Jawa_Barat"))
