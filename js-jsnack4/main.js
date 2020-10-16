//creo un array vuoto dove poter inserire i numeri dispari una volta analizzati
var numeri_dispari = []

//creo un ciclo per porre 5 volte la stessa domanda
for (var i = 0; i < 5; i++) {
    var numero_inserito = parseInt(prompt("inserisci un numero"))
    //controllo se mi sta inserendo i numeri scelti
    console.log(numero_inserito)

    //assegno una variabile solo per tutti i numeri inseriti dispari
    var dispari = numero_inserito % 2 == 1;
    console.log(dispari)

    //l'algoritmo analizza i numeri, se sono dispari li inserisce nell'array
    if (dispari == true ) {
        numeri_dispari.push(numero_inserito);
    } else {

    }
}

//controllo che i numeri dispari siano stati inseriti correttamente nell'array
console.log(numeri_dispari)
