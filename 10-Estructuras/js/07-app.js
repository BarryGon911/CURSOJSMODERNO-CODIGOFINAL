// Sección 10 - Clase 77: Estructuras de Control
// El Operador OR para que se cumpla al menos una condición

let efectivo = 300;
let credito = 300000;
let disponible = efectivo + credito;
let totalPagar = 600;

if(efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {
    console.log('Puedes pagar con efectivo o credito');
} else if(disponible >= totalPagar) {
    console.log('Paga con ambos');
} else {
    console.log('Fondos insuficientes');
}

// Puedes ver que se cumple una u otra condición, y con eso basta para que el código de la primera condición se cumpla...