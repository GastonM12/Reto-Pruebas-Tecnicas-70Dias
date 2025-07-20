/*
Enunciado Ejercicio 8:
Crea un algoritmo al cual le pase un número entero
y me lo convierta a número romano
 
Ejemplos:
enteroARomano(100)); // Resultado:  C
enteroARomano(345)); // Resultado: CCCXLV
 
*/

//crear una funcion que convierta los numeros enteros en romano

const enteroARomano = (numero) => {
   //variable que contiene el numero romano
   let resultado = "";

   //crear un array con los numeros romano
   const numerosRomano = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
   ];
   //crear un array von los numeros entero
   const numerosEnteros = [
      1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1,
   ];

   //Bucle para recorrer decimales

   for (i = 0; i < numerosEnteros.length; i++) {
      //bucle para iterar mientras el numero sea mayor o igual
      //al  numero decimal que estoy recorriendo

      while (numero >= numerosEnteros[i]) {
         //añadir el caracter romano al resultado
         resultado += numerosRomano[i];
         //actualizar el numero para restar el valor
         numero -= numerosEnteros[i];
      }
   }
   return resultado;
};

console.log(enteroARomano(1))