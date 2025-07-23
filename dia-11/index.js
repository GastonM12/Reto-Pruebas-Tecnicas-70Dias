/*
Enunciado Ejercicio 11:
 Crea una función a la cual le pase un array de números
 y un número que será el resultado de la suma de dos de los valores
 
Ejemplos:
sumarDos([3, 7, 8, 2], 10) // [3, 7] (ambos suman 10)
sumarDos([4, 5, 9, 1], 10) // [9, 1]
sumarDos([1, 2, 3, 4], 5) // [2, 3]
 
*/

//crear una funcion que dado un array sume dos numeros 

const sumarDos=(numeros,resultado)=>{
//recorrer los numeros 
for(i=0;i<numeros.length;i++){
    //volver a recorrer los numeros y verificar si la suma de los dos corresponde al resultado
    for(j=0;j<numeros.length;j++){
        if(numeros[i]+numeros[j]==resultado){
            return [numeros[i],numeros[j]]
        }
    }
}
}

console.log(sumarDos([1, 7, 8, 2], 9) );
