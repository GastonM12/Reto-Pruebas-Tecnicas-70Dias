/*
Enunciado Ejercicio 23:
Crea una función que a la cual le pase unos números en un array y me decodifique
el mensaje teniendo en cuenta que cada letra tiene un número asignado.
 
Las letras del abecedario de la A a la Z tienen un número
por ejemplo, la A es el número 1 y la Z es el número 26

  "a", "b", "c", "d", "e", "f", "g",
  "h", "i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s", "t",
  "u", "v", "w", "x", "y", "z"
 
Ejemplos:
decodificarMensaje([8, 15, 12, 1]);
 
Devuelve: 
HOLA
*/


//crear una funcion que desifre un codigo 

const decodificarMensaje=(numeros)=>{
    //crear un array con el abcedario
    const abcedario = [  "a", "b", "c", "d", "e", "f", "g",
  "h", "i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s", "t",
  "u", "v", "w", "x", "y", "z"]
    //crear un array que almacene las letras desifradas
   const letrasDesifradas = []
    //recorrer los numeros
    numeros.forEach(numero => {
       letrasDesifradas.push(abcedario[numero-1])
});
    //devolver palabra
    return letrasDesifradas.join("")
}

console.log(decodificarMensaje([8, 15, 12, 1]))