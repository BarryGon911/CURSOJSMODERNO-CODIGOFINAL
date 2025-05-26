// Array Destructuring - Al igual que los objetos algunas veces quieres crear la variable y el valor del arreglo, veamos algunos ejemplos:

const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

// const nombre = producto.nombre;
// console.log(nombre);

// Destructuring
const {nombre, precio, disponible} = producto;
console.log(nombre);

// Deconstructing con Arreglos
const numeros = [10, 20, 30, 40, 50];
const [ primero, , tercero] = numeros;

console.log(primero);
console.log(segundo);
console.log(tercero);

// Si quieres saltarte un valor puedes hacerlo con una coma
const [uno, , tres] = numeros;
// console.log(uno);
// console.log(tres);
// Si quieres asignar un valor por defecto puedes hacerlo de la siguiente manera
