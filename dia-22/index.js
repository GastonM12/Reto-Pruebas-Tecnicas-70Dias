/*
Enunciado Ejercicio 22:
Crea una función que invierta el orden de un texto
sin usar funciones nativas del lenguaje.
 
Ejemplos:
invertirTexto("Hola");
 
Devuelve: 
aloH
 
*/

//crear una funcion que invierta un string

const invertirTexto=(texto)=>{
    //crear un array que almacene el texto invertido
   const palabraInvertida = []
    //recorrer las letras
   for(i=texto.length-1;i>=0;i--){
      palabraInvertida.push(texto[i])
   }

    //devolver el texto invertido
   return console.log(palabraInvertida.join(""));
   
}

invertirTexto("Hola")