let form = document.querySelector('form');
let amount = document.querySelector('#input');
let side1 = document.querySelector('#side1');
let side2 = document.querySelector('#side2');
let result = document.querySelector('#result');

// to uzbek sums
let dollar = 11300;
let euro = 11900;
let rubl = 180;


/*
1 usd => 0.95 euro 
1 usd =>  rubl 
1 euro => 10700 sum 
1 rubl => 400 sum

1eyro 67 ruble
1dollar 63 ruble

1rubl 0.016 dollar
0.015 euro

*/
form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(amount.value);
    console.log(side1.value);
    console.log(side2.value);
    if (side1.value == "dollar" && side2.value == "sum") {
      result.textContent = `${amount.value * dollar} Sums`;
    } else if (side1.value == "dollar" && side2.value == "euro") {
      result.textContent = `${(amount.value * .95).toFixed(2)} Euros`;
    } else if (side1.value == "dollar" && side2.value == "rubl") {
      result.textContent = `${(amount.value * 63).toFixed(2)} Rubles`;
    } else if (side1.value == "sum" && side2.value == "dollar") {
      result.textContent = `$ ${(amount.value / dollar).toFixed(2)} Dollars`;
    } else if(side1.value == "sum" && side2.value == "euro"){
        result.textContent = `€ ${(amount.value / euro).toFixed(2)} Euros`;
    } else if(side1.value == "sum" && side2.value == "rubl"){
        result.textContent = `₽ ${(amount.value / rubl).toFixed(1)} Rubles`;
    }else if (side1.value == "euro" && side2.value == "dollar") {
      result.textContent = `${(amount.value / .95).toFixed(2)} Dollars`;
    } else if(side1.value == "euro" && side2.value == "sum"){
        result.textContent = `${(amount.value * euro).toFixed(2)} Sums`;
    } else if(side1.value == "euro" && side2.value == "rubl"){
        result.textContent = `${(amount.value * 67).toFixed(2)} Rubles`;
    }else if (side1.value == "rubl" && side2.value == "dollar") {
      result.textContent = `${(amount.value * .016).toFixed(2)} Dollars`;
    } else if(side1.value == "rubl" && side2.value == "sum"){
        result.textContent = `${(amount.value * rubl).toFixed(1)} Sums`;
    } else if(side1.value == "rubl" && side2.value == "euro"){
        result.textContent = `${(amount.value * .015).toFixed(2)} Euros`;
    }else if(side1.value == side2.value){
        alert("Select different currencies!");  
    }
});