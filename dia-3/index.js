/* Programación
- Siempre mostrar el resultado en la consola / terminal.
- Hay muchas soluciones válidas para un mismo ejercicio.
 
Enunciado Ejercicio 3:
Dadas dos fechas, crea una función que me proporcione la diferencia de días
entre ellas
 
Ejemplo:
diferenciaDeDias('1 de diciembre de 2023', '24 de diciembre de 2023'); Salida: 23
 
*/

//CREAR FUNCIO DIFERENCIA ENTRE DIAS

const diferenciaDeDias=(fecha1,fecha2)=>{
//calcular milisegundos
const milisegundos = Math.abs(Date.parse(fecha2)-Date.parse(fecha1))
//calcular minutos
const minutos = milisegundos / 60000
//calcular horas 
const horas = minutos/ 60
//calcular dias
const dias = horas/24


return dias


}
console.log(diferenciaDeDias("Dec 1,2023","Dec 1,2024"))