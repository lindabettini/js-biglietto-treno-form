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

// // 1. Rcupero tutti gli elementi html 

// ° FORMS ELEMENT
const nameField = document.getElementById('name');
const kmsField = document.getElementById('kms');
const ageField = document.getElementById('age');
const generateBtn = document.getElementById('generate-btn');
const resetBtn = document.getElementById('reset-btn');

// ° TICKET ELEMENTS
const quoteSection = document.getElementById('ticket-quote');
const namePlaceholder = document.getElementById('passenger-name');
const offerPlaceholder = document.getElementById('offer');
const cpPlaceholder = document.getElementById('cp');
const carriagePlaceholder = document.getElementById('carriage');
const pricePlaceholder = document.getElementById('price');

// // 2. Lego eventi ai bottoni

generateBtn.addEventListener('click', function () {

        // // 3. Recupero i valori
        const nameValue = nameField.value;
        const kmsValue = parseInt(kmsField.value);
        const ageValue = ageField.value;
        console.log(nameValue, kmsValue, ageValue);

        // // 4. Calcolo prezzo base
        let price = 0.21 * kmsValue;
        console.log(price);
})