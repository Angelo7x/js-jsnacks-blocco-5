var parola = prompt("Inserisci una parola");

function girala(parola) {

    var contrario = "";

    for ( var i = 0 ; i < parola.lenght- 1; i-- ) {

        contrario += parola[i];
    }

    return contrario;
}

var parolaGirata = girala(parola);

alert(parolaGirata);
