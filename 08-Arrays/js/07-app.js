// Eliminar elementos de un arreglo con splice

const carrito = [];

const producto = {
    nombre: 'Monitor 32 Pulgadas', 
    precio: 400
}

const producto2 = {
    nombre: 'Celular', 
    precio: 800
}

// .push() agrega un elemento al final del arreglo
carrito.push(producto2);
carrito.push(producto);

const producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}

const producto4 =  { 
    nombre: 'Ratón', 
    precio: 150
}

// .unshift() agrega un elemento al inicio del arreglo
carrito.unshift(producto3);
// console.table() se puede ver el arreglo en forma de tabla
console.table(carrito);

// .pop() elimina un elemento del arreglo, que en este caso es el Monitor 32 Pulgadas
// carrito.pop()
// console.table(carrito);

// .shift() elimina el primer elemento del arreglo, que en este caso es el Teclado
// carrito.shift()
// console.table(carrito);

// .splice() elimina un elemento del arreglo en la posición que le digamos, y cuantos elementos queremos eliminar. Hace lo mismo que el .pop() & que .shift(); pero en la posición que le digamos.
carrito.splice(0, 1);
console.table(carrito);