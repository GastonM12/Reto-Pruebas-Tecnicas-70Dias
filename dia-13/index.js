/*
Enunciado Ejercicio 13:
Crea una función que calcule el área de un cuadrado, un rectángulo o un triángulo
 
Ejemplos:
calcularAreaPoligono({ tipo: 'triangulo', base: 6, altura: 9 }); 
 
Entrada: 27
 
*/

//crear una funcion que calcule el area de un triangulo o de un cuadrado 

const calcularAreaPoligono=(poligono)=>{
  //verificar si es un triangulo o un cuadrado 
  if(poligono.tipo === "triangulo"){
    return poligono.base * poligono.altura / 2
  }
  else if (poligono.tipo === "cuadrado" && poligono.base === poligono.altura){
    return poligono.base * poligono.altura
  }
  else{
    return "No es un triangulo ni tampoco un cuadrado"
  }
}

console.log(calcularAreaPoligono({ tipo: 'cuadrado', base: 6, altura:9}));
