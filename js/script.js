// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.

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
var maxTentativi = 84;

// /variabili

// devo fare in modo che non ci siano doppioni all'interno della arrayBombe
var i = 0; 
// arrayBombe deve avere 16 elementi
while (arrayBombe.length < 16) {  

    var bombe = numeriCasuali(1, 100); 
    
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


// NB Non capisco il perchè se metto queste righe di codice smette di farmi la stampa in console

// if (tentativi.length == maxTentativi) {
//     console.log("Hai Vinto! \nHai totalizzato " + tentativi.length + " punti"); 
// }

// console.log(tentativi);









