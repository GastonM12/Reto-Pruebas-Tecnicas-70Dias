/*
Enunciado Ejercicio 27:
Crea una función a la cual le pasemos una frase y una palabra,
y busque si la palabra existe en la frase. Indistinto de músculas y minúsculas.
 
Ejemplos:
buscarPalabra('Hola como estas', 'Hola')  // Devuelve: true
*/

//crear una funcion que me diga si una palabra existe dentro de una oracion

function buscarPalabra(oracion, palabra) {
   return oracion.includes(palabra);
}

console.log(buscarPalabra('Hola como estas', 'no') );
