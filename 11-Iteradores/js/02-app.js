// Sección 11 - Clase 81: Iteradores en JavaScript
// Break y Continue; en un For Loop

// Veamos lo que es break y continue, break cortará la ejecución del for loop, mientras que continue nos permitirá interceptar digamos un elemento y continuar su ejecucicón...

for(let i = 0; i <= 10; i++) {
    if( i === 5) {
        console.log('Estamos en el 5... FIN.');
        break;
    }
    console.log(`Numero:  ${i}`);
}

for(let i = 0; i <= 10; i++) {
    if( i === 5) {
        console.log('Estamos en el 5... CONTINUAR....');
        continue;
    }
    console.log(`Numero:  ${i} `);
}

//  Y en que casos puedes utilizar el continue??
const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 100},
    { nombre: 'Tablet ', precio: 200, descuento: true},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400, descuento: true},
    { nombre: 'Celular', precio: 700},
]

for(let i = 0; i <= 10; i++) {
    if(carrito[i].descuento) {
        console.log(`El articulo ${carrito[i].nombre} Tiene descuento...`);
        continue;
    }
    console.log(carrito[i].nombre);
}
