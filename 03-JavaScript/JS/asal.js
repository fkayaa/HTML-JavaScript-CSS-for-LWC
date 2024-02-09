function calculate(){

    let num = Number(document.querySelector("input").value);

let counter =0;

if(num>1){ //2 den küçük ya da harf-boş kalma durumunun önüne geçmiş olduk
    for(let i=2; i<num;i++){

        if(num%i==0){

             counter++;
        }

    }
  counter>0 ? alert(num + " Asal bir sayı değildir.") : alert(num + " Asal bir sayıdır.")

}else{

    alert("Lütfen geçerli bir sayı giriniz.");


}

  

}