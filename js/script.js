// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.


// BONUS: (da fare solo se funziona tutto il resto)
// all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50
// -------------------------FUNZIONI-------------------------------

// Generare numeri random 
function numeriCasuali(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

// verifica numeri nell'array
function isInArray (element, array) {
    for (var i = 0; i < array.length; i++) {
        if (element == array[i]) {
            return true; 
        }
    }

    return false; 
}

// variabili
var arrayBombe = []; 
var tentativi = []; 

var maxRange; 
var difficolta = parseInt(prompt("inserisci la difficoltà: \n 0 facile \n 1 medio \n 2 difficile")); 

// /variabili


switch (difficolta) {
    case 0 :
        maxRange = 100; 
        break; 
    case 1 : 
        maxRange = 80;
        break; 
    case 2 :
        maxRange = 50; 
        break; 
    default: 
        alert("Errore! Inserisci un livello di difficoltà valido"); 
        console.log("Errore! Inserisci un livello di difficoltà");
}

var maxTentativi = maxRange - 16;

// devo fare in modo che non ci siano doppioni all'interno della arrayBombe
var i = 0; 
// arrayBombe deve avere 16 elementi
while (arrayBombe.length < 16) {  

    var bombe = numeriCasuali(1, maxRange); 
    
    // se il numero non si ripete allora può pusharlo nell'array
    if (!isInArray(bombe, arrayBombe)) {   
        arrayBombe.push(bombe); 
    }
}
console.log(arrayBombe);



var gameOver = false; 

while (tentativi.length < maxTentativi && gameOver == false) {

    do {
        var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 100.")); 
    } while (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 100); 

    if (isInArray(numeroUtente, arrayBombe)) {
        gameOver == true; 
        alert("Hai Perso! \nHai totalizzato " + tentativi.length + " punti");
        console.log(("Hai Perso! \nHai totalizzato " + tentativi.length + " punti")); 
    } else if (!isInArray(numeroUtente, tentativi)) {
        tentativi.push(numeroUtente); 
    }
    console.log(numeroUtente, tentativi.length );

}


// NB Non capisco il perchè se metto queste righe di codice smette di farmi la stampa in console su Chrome

// if (tentativi.length == maxTentativi) {
//     console.log("Hai Vinto! \nHai totalizzato " + tentativi.length + " punti"); 
// }

// console.log(tentativi);









