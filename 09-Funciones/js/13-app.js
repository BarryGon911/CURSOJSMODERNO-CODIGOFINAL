// Volover a hacer el archivo 13.js porque lo borré sin querer

// Sección 9 - Clase 70: Añadir Funciones en un Objeto

/*
En este video veremos lo que son los métodos de propiedad, es decir son funciones con una sintaxis similar a las de un método..
también llegan a ser muy comunes sobretodo porque es un objeto grande con todas las funciones...
*/

const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el id: ${id}`);
    },
    pausar: function() {
        console.log('pausando...');
    },
    borrar: function(id) {
        console.log(`Borrando canción: ${id}`)
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la Playlist de: ${nombre}`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la Playlist de: ${nombre}`)
    }
}

reproductor.reproducir(30);
reproductor.pausar();

// Tambien los métodos pueden quedarse por fuera
// reproductor.borrar = function(id) {
    
// }

reproductor.borrar(20);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');
