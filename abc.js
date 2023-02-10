var abecedario = "abcdefghijklmnopqrstuvwxyz";

function myFunction(str) {
  return abecedario.split("").every(function (item) {
    return str
      .toLowerCase() // todo a minúscula
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") //quitar acentos y puntuación en letras
      .replace(/^a-zA-Z0-9 ]/g, "") //quitar carctéres especiales
      .split("")
      .includes(item);
  });
}

console.log(myFunction("abcdefghíjklmnop qRs tuvwxyz !"));

console.log(myFunction("Extraño pan de col y kiwi se quemó bajo fugaz vaho")); // true
console.log(
  myFunction("Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!")
); // true

console.log(
  myFunction(
    "Esto es una frase larga pero no tiene todas las letras del abecedario"
  )
); // false
console.log(myFunction("De la a a la z, nos faltan letras")); // false
