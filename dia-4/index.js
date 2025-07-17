/* Enunciado Ejercicio 4:
Crea el juego del ahorcado.
El usuario tendrá que ir adivinando y descubriendo las letras de una palabra 
secreta, y tendrá 5 intentos (un intento por extremidad del cuerpo humano).
 
Utiliza el método de entrada de datos habitual de tu lenguaje,
en el caso de JS, usaremos la función prompt.
 
Ejemplo:
juegoDelAhorcado('vencedor'); 
 
Salida:
Adivina la letra: i
La palabra es: _i___
Te quedan 5 intentos
 
*/


//crear funcion juego el ahorcado 

const juegoDelAhorcado=(palabra)=>{
   //mostrar palabra oculta
const palabraOculta = palabra.split("").map(letra => {return "_"})
   //cantidad de intentos
let intentos = 5
   //recorrer intentos
while (intentos > 0) {
   
   
   //pedir por pantalla una letra
const letra = prompt("La palabra es "+palabraOculta.join(" ")+"\nTienes "+intentos+" intentos"+"\nIngrese una letra")
   //verificar si la letra existe
if(palabra.includes(letra) && !palabraOculta.includes(letra)){
   //verificar si tiene mas de una coincidencia 
  for(i=0;i<palabra.length;i++){
   
   if(palabra[i]===letra){

      palabraOculta[i]=letra
   }
  }
  intentos++
}
//verificar que la letra no fue adivinada con anterioridad
if(palabraOculta.includes(letra)){
   intentos++
}
//verificar si ganaste 
if(palabraOculta.join("")===palabra){
   return alert("Ganaste la palabra es "+ palabra)
}

   intentos --
}
}

juegoDelAhorcado("adivina")