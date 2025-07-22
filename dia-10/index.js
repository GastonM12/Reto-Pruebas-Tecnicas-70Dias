/*
Enunciado Ejercicio 10:
Crea una función que reciba un DNI (8 números) y calcule la letra del DNI
 
Es un proceso matemático fácil que se basa en obtener el 
resto de la división entera del número de DNI y el número 23. 
Y con el resto se obtiene la letra, usándolo como posición o índice
dentro de un array de letras.
 
Este sería el array de letras:
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 
                'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
 
Ejemplos:
generarLetraDNI("25439343"); Resultado: 25439343D
 
*/

//crear una funcion que calcule la letra del dni

const generarLetraDNI = (dni) => {
   //letras del dni
   const letras = [
      "T",
      "R",
      "W",
      "A",
      "G",
      "M",
      "Y",
      "F",
      "P",
      "D",
      "X",
      "B",
      "N",
      "J",
      "Z",
      "S",
      "Q",
      "V",
      "H",
      "L",
      "C",
      "K",
      "E",
      "T",
   ];

   //dividir la el dni
   const indiceDeLetra = dni % 23;
   //devolver la letra
   return dni+letras[indiceDeLetra];
};
console.log(generarLetraDNI("25439343"))