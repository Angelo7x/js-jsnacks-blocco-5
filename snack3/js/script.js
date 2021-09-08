var parola = prompt("Inserisci una parola");

function girala(parola) {

    var contrario = "";

    for ( var i = parola.length -1; i  >= 0; i-- ) {

        contrario += parola[i];
    }

    return contrario;
}

var parolaGirata = girala(parola);

alert(parolaGirata);
