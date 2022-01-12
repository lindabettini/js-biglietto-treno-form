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

// ° Prendo elemento KM
let km = document.querySelector('#km');
console.log(km)

// ° Prendo elemento AGE
let passengerAge = document.querySelector('#age');
console.log(passengerAge)

// ° Prendo elemento Button "Genera"
let generaBtn = document.querySelector('#genera');
console.log(genera)

// ° Prendo elemento Button "Annulla"
let annullaBtn = document.querySelector('#annulla');
console.log(annullaBtn)

// ° Prendo elemento in cui stampare preventivo
const preventivo = document.getElementById('preventivo');

// ° Calcolare il prezzo totale del viaggio

let discountValue = 0;

generaBtn.addEventListener('click', function () {    
    let kmValue = parseInt(km.value);
    let totalPrice = kmValue * 0.21;      
    // & Calcolare eventuali sconti del viaggio
    if (passengerAge.value === 'minorenne'){              
        discountValue = (totalPrice / 100) * 20;
        totalPrice = totalPrice - discountValue;
    }  else if (passengerAge.value === 'over-65'){              
        discountValue = (totalPrice / 100) * 40;
        totalPrice = totalPrice - discountValue;
    }
    const finalPrice = totalPrice.toFixed(2); 
    console.log(passengerAge.value)
    console.log(finalPrice)
    preventivo.innerHTML = `        
<div id="stampa-nome">Nome passeggero: ${passengerName.value}</div>
<div id="offerta">Biglietto Standard</div>
<div id="carrozza">3</div>
<div id="codice-treno">556789</div>
<div id="costo">Il costo del biglietto è: &euro; ${finalPrice}</div>
`;
});

// ° Cancellare tutti i dati inseriti

annullaBtn.addEventListener('click', function () {    
    passengerName.value = '';
    km.value = '';
    passengerAge.value = '';
    preventivo.innerHTML = ``;
});




