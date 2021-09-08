var parola = prompt("Inserisci una parola");

function girala(parola) {

    var contrario = "";

    for ( var i = 0 ; i < parola.lenght; i-- ) {

        contrario += parola[i];
    }

    return contrario;
}

var parolaGirata = girala(parola);

console.log (parolaGirata);
