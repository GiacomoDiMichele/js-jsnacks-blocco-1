var numeri_dispari = []


for (var i = 0; i < 5; i++) {
    var numero_inserito = parseInt(prompt("inserisci un numero"))
    console.log(numero_inserito)

    var dispari = numero_inserito % 2 == 1;
    console.log(dispari)

    if (dispari == true ) {
        numeri_dispari.push(numero_inserito);
    } else {

    }
}

console.log(numeri_dispari)
