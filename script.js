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

// ° FORMS ELEMENT
const nameField = document.getElementById('#name');
const kmsField = document.getElementById('#kms');
const ageField = document.getElementById('#age');
const generateBtn = document.getElementById('#generate-btn');
const resetBtn = document.getElementById('#reset-btn');

// ° TICKET ELEMENTS
const quoteSection = document.getElementById('ticket-quote');
const namePlaceholder = document.getElementById('passenger-name');
const offerPlaceholder = document.getElementById('offer');
const cpPlaceholder = document.getElementById('cp');
const carriagePlaceholder = document.getElementById('carriage');
const pricePlaceholder = document.getElementById('price');

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
        
<div class="" id="stampa-nome"><strong>NOME PASSEGGERO</strong></br>${passengerName.value}</div>
<div class="" id="offerta"><strong>Offerta</strong></br>Biglietto Standard</div>
<div class="" id="carrozza"><strong>Carrozza</strong></br>10</div>
<div class="" id="codice-treno"><strong>Codice CP</strong></br>556789</div>
<div class="" id="costo"><strong>Costo biglietto</strong></br>Il costo del biglietto è: &euro; ${finalPrice}</div>
`;
});

// ° Cancellare tutti i dati inseriti

annullaBtn.addEventListener('click', function () {    
    passengerName.value = '';
    km.value = '';
    passengerAge.value = '';
    preventivo.innerHTML = ``;
});




