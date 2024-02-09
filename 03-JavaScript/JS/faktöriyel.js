const calculate = () => {
    // Number(), input boş olduğunda 0, string olduğunda ise NaN döndürür.
    let num = Number(document.querySelector(".input").value);
    let multiplication = 1;

    if(num > 0){
        for(let i=num; i>0; i--){
            multiplication *= i;
        }
    
        document.querySelector(".result").innerHTML = `Faktöriyel sonucu: ${multiplication}`;
    }
    else{
        document.querySelector(".result").innerHTML = `Lütfen geçerli bir sayı giriniz.`;
    }
    
}

