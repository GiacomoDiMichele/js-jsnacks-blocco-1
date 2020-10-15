//creo un ciclo per far ripetere 5 volte la stessa domanda, stampando i risultati della variabile
var somma = 0;
for (var i = 0; i < 5; i++) {
    var numero_inserito = parseInt(prompt("inserisci un numero"))
    //console.log(numero_inserito)
    //somma = numero_inserito + somma
    console.log(somma)
    somma = numero_inserito + somma
    // somma += numero_inserito
    console.log(somma)
}

//console.log(somma)
