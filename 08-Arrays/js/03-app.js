// Veamos algunas operaciones útiles en los arreglos,

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

// Si quieres saber cuantos elementos hay un arreglo puedes utilizar la propiedad
console.table(meses);
console.table(meses[0]);
console.table(meses[1]);
console.table(meses[2]);

// Cuánto elementos hay en el arreglo, se utiliza la propiedad .lenght?
console.log(meses.length);

/*
Ahora, si recuerdas en videos anteriores vimos como acceder a un arreglo, pero si este arreglo tuviera 40 elementos sería muy complicado ir 1 por 1, si tienes un carrito de compras y agregas o quitas elementos del carrito, ese arreglo crece de forma dinamica, entonces, como acceder a todos los elementos? con algo llamado un iterador, y en JavaScript hay varios, veamos el for que existe en diferentes lenguajes...
*/
for (let i = 0; i < meses.length; i++) {
  /*
  i es el índice del arreglo, y con ese índice accedemos al elemento del arreglo
  meses[i] es el elemento del arreglo en la posición i
  */
    console.log(meses[i]);
}