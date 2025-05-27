// Sección 9 - Clase 68: Las Ventajas de las Arrow Functions (Lambdas)

// Parametros en un arrow Function...
const aprendiendo1 = function(tecnologia1, tecnologia2) {
    console.log(`Aprendiendo: ${tecnologia1} ${tecnologia2}`);
}
aprendiendo1('JavaScript', 'Node.js');

// multiples parametros si requieren parentesis
const aprendiendo2 = (tecnologia1, tecnologia2) => `Aprendiendo ${tecnologia1} ${tecnologia2}`;
console.log(aprendiendo2('JavaScript', 'Node.js'));
