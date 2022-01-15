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
        let rate = 0.21 * kmsValue;
        let rateCategory;

        // // 5. Calcolo sconti
        switch(ageValue) {
            case 'minor':
                rate *= 0.8;
                // ^ oppure: rate = rate * 0.8; ^ oppure: rate = (rate / 100) * 20;
                rateCategory = 'Tariffa Giovani';
                break;
            case 'over':
                rate *= 0.6;
                rateCategory = 'Tariffa Senior';
                break;
            default:
                rateCategory = 'Tariffa Ordinaria';
                break;
        }
        /*
        ^ OPPURE CALCOLO SCONTO CON IF:
        if(ageValue === 'minor'){
            rate *= 0.8;
            rateCategory = 'Tariffa Giovani'            
        } else if(ageValue === 'over'){
            rate *= 0.6;
            rateCategory = 'Tariffa Senior'
        }
        */

        // // 6. Randomizzo Carrozza
        const carNumb = Math.floor(Math.random() * 12) + 1;

        // // 6. Randomizzo il CP
        // ^ Math.floor(Math.random() * (max - min)) + min
        // ^ casuale tra 900000 e 999999:
        const cpNumb = Math.floor(Math.random() * (100000 - 90000)) + 90000;

        // // . Display results
        namePlaceholder.innerText = nameValue;
        pricePlaceholder.innerText = '€' + ' ' + rate.toFixed(2);
        offerPlaceholder.innerText = rateCategory;
        carriagePlaceholder.innerText = carNumb;
        cpPlaceholder.innerText = cpNumb;
})