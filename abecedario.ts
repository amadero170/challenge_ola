const patt = /[a-z]/;
const abecedario = "abcdefghijklmnopqrstuvwxyz";

function myFunc(str: string): boolean {
  let arr: string[] = str
    .toLowerCase()
    .split("")
    .map((item) => quitarAcento(item))
    .filter((item) => patt.test(item));

  return abecedario.split("").every((item) => {
    return arr.indexOf(item) >= 0;
  });
}

function quitarAcento(char: string): string {
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
console.log(
  myFunc("Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!")
); // true

console.log(
  myFunc(
    "Esto es una frase larga pero no tiene todas las letras del abecedario"
  )
); // false
console.log(myFunc("De la a a la z, nos faltan letras")); // false
