/*
Enunciado Ejercicio 14:
Dada una cadena de texto, comprobar si es un palindromo o no. No usar funciones de
javascript, solo estructuras de control
 
Los palíndromos son palabras que se leen igual aún estando invertidas. 
Por ejemplo: ana, bob, otto, allivessevilla
 
Ejemplos:
esPalindromo("otto") // Devuelve: true
esPalindromo("victor") // Devuelve: false
 
*/

//crear una funcion que verifique si una palabra es escribiendola al reves

const esPalindromo=(palabra)=>{
    //crear un array de la palabra 
   const letras = palabra.split("")
    //crear un array con la palbra inversa
   const palabraInversa = []
    //recorrer la palabra 
    letras.forEach(letra => {
        //añadirla al array
       palabraInversa.unshift(letra)     
    });
    //verificar si es palindromo
    if(palabraInversa.join("")===palabra){
        return true
    }else{
        return false
    }
}

console.log(esPalindromo("victor"));

