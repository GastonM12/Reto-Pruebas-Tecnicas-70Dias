/*
Enunciado Ejercicio 19:
Crea una función que simule el lanzamiento de dos dados.
 
Ejemplos:
dados();

*/

//crear una funcion que simule un dado (que genere un numero al azar de 1 al 6)

const dado=()=>{
    return Math.floor(Math.random() * 6)+1
}


console.log(dado());
