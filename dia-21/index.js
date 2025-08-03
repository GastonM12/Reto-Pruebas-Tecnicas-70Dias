/*
Enunciado Ejercicio 21:
Crea una función que reciba un número y me genere una matriz
con el número de columnas y filas que le hemos indicado por parámetro
 
Ejemplos:
generarMatriz(4);
 
Devuelve: 
[
  [ 1, 2, 3, 4 ],
  [ 5, 6, 7, 8 ],
  [ 9, 10, 11, 12 ],
  [ 13, 14, 15, 16 ]
]
 
*/


//crear una funcion que dado un numero te cree la misma cantidad de filas y columnas

const generarMatriz=(cantidad)=>{
    //crear un array para almacenar el resultado
   const filasYColumnas = []
    //crear un contador
    let contador = 0
    //recorrer la cantidad de filas
for(i=1;i<=cantidad;i++){
    //recorrer la cantidad de columnas
    const columnas = []
  for(j=0;j<cantidad;j++){  
    contador += 1
    columnas.push(contador)
  }
  filasYColumnas.push(columnas);
  
}
return filasYColumnas

}

console.log(generarMatriz(5));