/*
Enunciado Ejercicio 9:
Crea una función que reciba un array de números y calcule
la suma de todos los números pares del array
 
Ejemplos:
sumarPares([2, 13, 6, 15]); Resultado: 8
 
*/

//crear una funcion que sume los numeros pares

const sumarPares = (numeros) => {
   //crear un array con los numeros pares
   const numerosPares = numeros.filter((numero) => numero % 2 == 0);
   //resultado de la suma
   let suma = 0;
   //recorrer array de numeros pares
   for (i = 0; i < numerosPares.length; i++) {
      suma += numerosPares[i];
   }
   return suma;
};

console.log(sumarPares([2, 13, 6, 15]));
