// Supongamos que creamos un carrito de compras desde la consola, más adelante lo haremos ya desde una interfaz web.

const carrito = [];

// Añadir un elemento al carrito...
const producto = {
    nombre: 'Monitor 32 Pulgadas', 
    precio: 400
}

const producto2 = {
    nombre: 'Celular', 
    precio: 800
}

// .push() es un método de los arreglos que nos permite añadir un elemento al final del arreglo, en este caso al carrito de compras.
carrito.push(producto2);
carrito.push(producto);

const producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}

// .unshift() es un método de los arreglos que nos permite añadir un elemento al inicio del arreglo, en este caso al carrito de compras.
carrito.unshift(producto3);
console.table(carrito);