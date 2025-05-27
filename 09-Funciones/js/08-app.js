// Sección 9 - Clase 65: Ejemplo con multiples funciones que se se pasan valores 

/*
Actualmente hemos tenido funciones que envian datos a la consola, ya cuando veamos la parte del DOM algunas funciones van a validar formularios y seguramente ejecutaran todo el código ahí, pero también tendremos funciones que retornan valores para pasarlos hacia otras funciones o hacer algo más...
*/

function sumar(a, b) {
    return a + b;
}

const resultado = sumar(2, 3);
console.log(resultado);

// Un ejemplo más avanzado....
let total = 0;
function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return 1.16 * total;
}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(600);

console.log(total);

const totalPagar = calcularImpuesto(total);
console.log(`El total a pagar es de: ${totalPagar}`);
