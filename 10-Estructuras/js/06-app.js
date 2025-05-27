// Sección 10 - Clase 76: Estructuras de Control
// El Operador && para revisar que se cumplan 2 ó más condiciones

const usuario = false;
const puedePagar = false;

if (usuario && puedePagar) {
    console.log('Si pudes comprar')
} else if (!puedePagar && !usuario) {
    console.log('No, no puedes comprar')
} else if(!usuario) {
    console.log('Inicia sesión para poder comprar')
} else if (!puedePagar) {
    console.log('Fondos insuficientes')
}
