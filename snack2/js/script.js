var zucchine = 
[
    {
        nome : "Nera di Milano",
        peso : 272,
        lunghezza : 8
    },

    {
        nome : "Alberello",
        peso : 540,
        lunghezza : 30
    },

    {
        nome : "Tonda di Nizza",
        peso : 320,
        lunghezza : 14
    },

    {
        nome : "Lunghe fiorentine",
        peso : 328,
        lunghezza : 22
    },

    {
        nome : "Trombetta d'Albenga",
        peso : 120,
        lunghezza : 11
    },

    {
        nome : "Zucchino giallo Golden",
        peso : 240,
        lunghezza : 10
    },

    {
        nome : "Zucchino romanesco",
        peso : 300,
        lunghezza : 54
    },

    {
        nome : "Zucchino ortolano di Faenza",
        peso : 280,
        lunghezza : 30
    },

    {
        nome : "Zucchino siciliano",
        peso : 400,
        lunghezza : 5
    },

    {
        nome : "Zucchina bianca triestina",
        peso : 380,
        lunghezza : 90
    }

];


var zucchineCorte = [];

var zucchineLunghe = [];

for ( var i = 0; i < zucchine.length; i++) {
    if ( zucchine[i].lunghezza < 15 ) {
        zucchineCorte.push(zucchine[i]);
    } else  {
        zucchineLunghe.push(zucchine[i]);
    }
};

console.log(zucchineCorte);
console.log(zucchineLunghe);