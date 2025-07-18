/*
Enunciado Ejercicio 6:
Dado un año actual, crea un programa que me muestre 
los años bisiestos que habrá en los próximos 30 años
 
Ejemplo:
bisiestos (2023);
 
Salida:
2024
2028
2032
2036
2040
2044
2048
2052
 
*/

//crear funcion año biciesto 

const biciesto=(año)=>{
//recorrer los proximos 30 años
for(i=0;i<=30;i++){
   let años = año+i
   //verificar si el año es biciesto(todos los que divididos por 4 dan 0 y aquellos que dividido por 400 dan 0)
   if(años % 4 == 0 || años % 400 == 0 ||(años % 100 ==0 && años % 400 == 0)){
    console.log(`El ${años} es biciesto`);
    
   }
}

}

biciesto(2023)