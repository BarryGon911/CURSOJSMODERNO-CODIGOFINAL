// Sección 11 - Clase 82: Iteradores en JavaScript
// Ejercicio Fizz Buzz...

/*
Fizz Buzz es un reto que complica mucho a los programadores, básicamente si un número es múltiplo de 3 imprimes  en consola FIZ,
Si es múltiplo de 5 imprimes en consola BUZZ,
Si es múltiplo de ambos como 15, 30, 45 debes imprimir FIZZ BUZZ
*/
// 3 6 9 12 15 ...  FIZZ
// 5 10 15 20 25 ... BUZZ
// 15 30 45 ... Fizz Buzz

for (let i = 1; i < 100; i++) {
  if (i % 15 === 0) {
    console.log(`${i} FIZZBUZZ!`);
  } else if (i % 3 === 0) {
    console.log(`${i} Fizz`);
  } else if (i % 5 === 0) {
    console.log(`${i} Buzz`);
  }
}
