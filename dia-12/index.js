/*
Enunciado Ejercicio 12:
Crea un programa que cuente las palabras de un texto
 
Ejemplos:
contarPalabras("El perro de san roque no tiene el rabo 
porque es un perro muy, muy malo");
 
Devuelve:
{
  el: 2,
  perro: 2,
  de: 1,
  san: 1,
 Roque: 1,
  no: 1,
  tiene: 1,
 Rabo: 1,
  porque: 1,
  es: 1,
  un: 1,
  muy: 2,
  malo: 1
}
*/

// crear una funcion que cuente las palabras repetidas en una oracion

const contarPalabras = (parrafo) => {
   //separar el parrafo,eliminar caracteres y convertir a minusculas
   const palabras = parrafo
      .toLowerCase()
      .replace(/[^\w/s]/gi ," ") //exprecion regular para eliminar todos los caracteres y acentos
      .split(" ");
   //crear una variable contador
   let contador = {};
   //iterar sobre las palabras
   palabras.forEach((palabra) => {
      //verificar si la palabra ya existe en el contador o no
      if (palabra in contador) {
         //si existe sumar uno
         contador[palabra]++;
      } else {
         //sino existe igualar a 1
         contador[palabra] = 1;
      }
   });
   console.log(palabras);
};
contarPalabras(
   "El perro de san roque no tiene el rabo porque es un perro muy, muy malo"
);
