// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.

// -------------------------FUNZIONI-------------------------------

// Generare numeri random 
function numeriCasuali (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

// for (i = 0  ; i < 50 ; i++) {
//     console.log(numeriCasuali(1, 100));
// }

// verifica numeri nell'array
function isInArray (element, array) {
    for (var i = 0; i < array.lenght; i++) {
        if (element == array[i]) {
            return true; 
        }
    }

    return false; 
}

// ---------------------------VARIABILI-------------------------------
var bombe = []; 
var tentativi = []; 
var maxTentativi = 10; 

// /variabili

while (bombe.lenght < 16) {
    var numeriRandom = numeriCasuali(1, 100); 
    console.log(numeriRandom);

    if (!isInArray(numeriRandom, bombe) ) {
        bombe.push(numeriRandom); 
    }
    console.log(bombe.lenght);
}
console.log("bombe " ,  bombe);





