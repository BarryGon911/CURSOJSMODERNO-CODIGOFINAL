// Funciones que toman parametros y argumentos...

// Nuestra primera función no tiene nada de emocionante, es demasiado simple, para que tus funciones puedan ser más versatiles e inteligentes deberán utilizar parametros y argumentos

function sumar(a, b) {// a y b son parametros, son valores que se le pueden pasar a la función... Los valores digamos no son reales, pues son variables...
  console.log(a + b);
}

sumar(2, 3);// 2 y 3 son argumentos, son los valores reales...
sumar(200, 184);
sumar(124, 321);

function saludar(nombre, apellido) {
  // nombre y apellido son parametros, son valores que se le pueden pasar a la función... Los valores digamos no son reales, pues son variables...
  console.log(`Hola ${nombre}  ${apellido}`);
}
saludar("Juan", "De la torre"); // Pablo y De la torre son argumentos, son los valores reales...
saludar();
