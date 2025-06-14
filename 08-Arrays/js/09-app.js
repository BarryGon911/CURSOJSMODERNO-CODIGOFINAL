// De aquí en adelante estaremos viendo una serie de métodos de arreglos

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

// Recorrer un arreglo de la forma tradicional y mostrar su contenido...
for(let i = 0; i < carrito.length; i++ ) {
    // Usaremos la interpolación de cadenas ó (Template Strings) para mostrar el contenido del carrito
    console.log(`Articulo: ${carrito[i].nombre} Precio: $ ${carrito[i].precio} `)
}

// O recorrer el arreglo con ForEach. Será el mismo resultado que el anterior método
carrito.forEach(function(producto) {
    console.log(`Articulo: ${producto.nombre} Precio: $ producto.precio} `)
})
