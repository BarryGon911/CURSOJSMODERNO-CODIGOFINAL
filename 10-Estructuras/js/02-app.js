// Sección 10 - Clase 72: Estructuras de Control
// Comparador Estricto

const puntaje = 1000;
const puntaje2 = "1000";

console.log(typeof puntaje);
console.log(typeof puntaje2);

// No es igual
if(puntaje != 1000) {
    console.log("¡Si es diferente!");
}  else {
    console.log("No, no es diferente");
}
// Comparador estricto de tipo y valor
if(puntaje === 1000) {
    console.log("Si es igual!");
} else {
    console.log("No no es igual");
}

// Comparador estricto de tipo y valor
if(puntaje !== 1000) {
    console.log("Si es DIFERENTE (ESTRICTO) !");
} else {
    console.log("No no es igual");
}
