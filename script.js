/* 
Il programma dovrà mostrare un form da compilare con cui chiedere all'utente il 
-numero di chilometri che vuole percorrere e 
-l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo). 
*/

// ° Prendo elemento nome
let passengerName = document.querySelector('#nome');
console.log(passengerName)

// ° Prendo elemento KM'
let km = document.querySelector('#km');
km = parseInt(km);
console.log(km)

// ° Prendo elemento eta'
let passengerAge = parseInt(document.querySelector('#age'));
passengerAge = parseInt(passengerAge);
console.log(passengerAge)

// ° Prendo elemento Button "Genera"
let generaBtn = document.querySelector('#genera');
console.log(genera)

// ° Calcolare il prezzo totale del viaggio

let discountValue = 0;

generaBtn.addEventListener('click', function () {
    let totalPrice = km.value * 0.21;
    console.log(totalPrice)
    // & Calcolare eventuali sconti del viaggio
    if (passengerAge.value < 18){              
        discountValue = (totalPrice / 100) * 20;
        totalPrice = totalPrice - discountValue;
    }  else if (passengerAge.value > 65){              
        discountValue = (totalPrice / 100) * 40;
        totalPrice = totalPrice - discountValue;
    }
});


// // Arrotondare prezzo finale 
// let finalPrice = totalPrice.toFixed(2);

// // Recupero elementi da sampare in pagina
// const kmElement = document.getElementById('km');
// const ageElement = document.getElementById('age');
// const priceElement = document.getElementById('price');

// // Stampo in pagina
// kmElement.innerHTML = `Chilometri biglietto: ${kmRun}`;
// ageElement.innerHTML = `Et&agrave; passeggero: ${passengerAge}`;
// priceElement.innerHTML = `Prezzo: € ${finalPrice}`;
