// Sección 9 - Clase 69: Arrow Functions (Lambdas) en un forEach y un Map

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500},
    { nombre: 'Televisión', precio: 100},
    { nombre: 'Tablet ', precio: 200},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700},
]

// Map con una Función normal
const nuevoArray1 = carrito.map(function(producto) {
    return `Articulo: ${producto.nombre} Precio: $${producto.precio}`;
});

// Map con una Arrow Function
const nuevoArreglo = carrito.map(producto => `${producto.nombre} - Precio: ${producto.precio}`)
carrito.forEach(producto => console.log( `${producto.nombre } - Precio: ${producto.precio}`));

console.log(nuevoArreglo);  
