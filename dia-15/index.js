/*
Enunciado Ejercicio 15:
Dada un array de palabras, crear una función que lo devuelva ordenado
por la longitud de sus palabras de menor a mayor
 
Ejemplos:
ordenarPorLongitud([
  "Hola",
 "soja",
  "Víctor Robles",
  "como",
  "estas",
  "hoy",
  "amigo",
  "yo",
  "voy",
 "una",
  "estudiar",
  "ahora"
]);
 
*/

//crear una funcion que ordene de menor a mayor por cantidad de caracteres

const ordenarPorLongitud = (arrayPalabras) => {
   //ordenar con un sort
   return arrayPalabras.sort((a, b) => a.length - b.length); //accedemos con el length para comparar por la cantidad de caracteres
};
console.log(
   ordenarPorLongitud([
      "Hola",
      "soja",
      "Víctor Robles",
      "como",
      "estas",
      "hoy",
      "amigo",
      "yo",
      "voy",
      "una",
      "estudiar",
      "ahora",
   ])
);
