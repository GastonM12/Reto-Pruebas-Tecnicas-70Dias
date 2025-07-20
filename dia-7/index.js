/*
Enunciado Ejercicio 7:
Dada un array de enteros, detectar si esa lista
de números es una permutación del 1 al último número del array.
 
En este caso, una permutación es una secuencia de números
en orden sin que falte ninguno entre ellos.
 
Devolver el número faltante más grande.
 
El array puede venir desordenado.
 
Ejemplos:
permutacion([1, 2, 3, 4, 5])   // Devuelve: 5
permutacion([1, 2, 3, 5]))     // Devuelve: 4
 
*/

// crear una funcion que devuelva el numero faltante

const permutacion = (numeros) => {
   //ordernar los numeros

   numeros.sort((menor, mayor) => menor - mayor);

   //crear un array de numeros que faltan
   const numerosFaltantes = [];

   //recorrer los numeros
   for (i = 0; i < numeros.length; i++) {
      //verificar si falta algun numero
      let numeroFalta = numeros[i] + 1;

      if (numeros[i + 1] !== numeroFalta) {
         numerosFaltantes.push(numeroFalta);
      }
   }
   //si no falta ningun numero devolver el numero mas alto de los numeros pasados

   if (numerosFaltantes.length <= 1) {
      return numeros[numeros.length - 1];
   }
   //eliminar el ultimo numero de los numeros faltantes

   numerosFaltantes.pop();

   return numerosFaltantes[numerosFaltantes.length - 1];
};

console.log(permutacion([1,2,3,5,7]));
