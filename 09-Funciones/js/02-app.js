// Declaración de la Función (Function Declaration)
sumar1();
function sumar1() {
  console.log(2 + 2);
}

// Expresión de la Función (Function Expression)
/*
-Esto no funciona porque la función no se ha declarado antes de ser llamada
-Por lo tanto no se puede llamar a la función antes de que sea declarada
-Esto es una expresión de función, no una declaración de función
-Por lo tanto no se puede llamar a la función antes de que sea declarada
-Si lo intentas, te dará un error de tipo "TypeError: sumar2 is not a function"
*/
sumar2();
const sumar2 = function () {
  console.log(3 + 3);
};
