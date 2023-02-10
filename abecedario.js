var patt = /[a-z]/;
var abecedario = "abcdefghijklmnopqrstuvwxyz";
function myFunc(str) {
    var arr = str
        .toLowerCase()
        .split("")
        .map(function (item) { return quitarAcento(item); })
        .filter(function (item) { return patt.test(item); });
    return abecedario.split("").every(function (item) {
        return arr.indexOf(item) >= 0;
    });
}
function quitarAcento(char) {
    switch (char) {
        case "á":
        case "ä":
            return "a";
        case "é":
        case "ë":
            return "e";
        case "í":
        case "ï":
            return "i";
        case "ó":
        case "ö":
            return "o";
        case "ú":
        case "ü":
            return "u";
        case "ñ":
            return "n";
        default:
            return char;
    }
}
console.log(myFunc("abcdefghíjklmnop qRs tuvwxyz !"));
console.log(myFunc("Extraño pan de col y kiwi se quemó bajo fugaz vaho")); // true
console.log(myFunc("Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!")); // true
console.log(myFunc("Esto es una frase larga pero no tiene todas las letras del abecedario")); // false
console.log(myFunc("De la a a la z, nos faltan letras")); // false
