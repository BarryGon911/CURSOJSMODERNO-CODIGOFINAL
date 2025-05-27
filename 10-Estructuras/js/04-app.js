// Sección 10 - Clase 74: Estructuras de Control
// Comparando Mayor o Igual & else if

// Algunas veces vas a desear revisar si se cumple más de una condición...

const dinero = 100;
const totalAPagar = 300;
const tarjeta = false;
const cheque = false;

if(dinero >= totalAPagar) {
    console.log('Si podemos pagar');
} else if (cheque) {
    console.log('Si podemos pagar con cheque');
} else if(tarjeta) {
    console.log('Si podemos pagar con tarjeta');
} else {
    console.log('Fondos Insuficientes');
}
