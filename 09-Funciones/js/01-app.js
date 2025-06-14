/*
Las funciones en cualquier lenguaje son una serie de procedimientos o instrucciones, que realizan una acción, una ventaja de las funciones es que permiten tener un código más ordenado fácil de mantener. Otra ventaja de las funciones es que son reutilizables, puedes tener una función que valide un formulario y utilizarla en todos tus formularios, puedes tener también una función que envie datos al servidor y reutilizarla múltiples veces.

Existen 2 formas de crear funciones en JavaScript:

Declaración de Función, la expresión de la función utiliza la palabra reservada function, seguida de un nombre y un parentesis, en este parentesis se colocan los argumentos, finalmente el cuerpo de la función se define por unas llaves...
*/

// Declaración de función - Este tipo de funciones se declaran con la palabra reservada function, seguida del nombre de la función y el cuerpo de la función entre llaves
function sumar1() {
    console.log(2 + 2);
}

// Las funciones deben llamarse, de otra forma en realidad no hacen mucho:
sumar1(); // se manda llamar por su nombre seguido del parentesis()

// Expresión de función - Este tipo de funciones se asigna como si fuera una variable
const sumar2 = function() {
    console.log(3 + 3);
}

// Se manda llamar de la misma forma que la función anterior
sumar2();
