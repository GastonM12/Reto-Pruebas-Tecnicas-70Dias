/*
Enunciado Ejercicio 20:
Crea una función que ordene un array de objetos en base a las propiedades
que le pase por parámetro.
 
  const usuarios = [
    { nombre: 'Antonio', edad: 20 },
    { nombre: 'Juan', edad: 23 },
    { nombre: 'Pepe', edad: 12 },
    { nombre: 'Raul', edad: 28 },
    { nombre: 'Paco', edad: 38 },
    { nombre: 'Jason', edad: 56}
  ];
 
 
Ejemplos:
ordenarObjetos(usuarios, "edad");
 
*/


//crear una funcio que ordene dependiendo de los parametros que le pasemos


const ordenarObjetos=(usuarios,ordenar)=>{
//crear una variable que ordene el arreglo usando sort

const arrayOrdenado= usuarios.sort((a,b)=>{
    //comparar si es de tipo strin o de tipo number
    if(typeof a[ordenar]=="number"){
      return  a[ordenar]-b[ordenar]
    }
     if(typeof a[ordenar]=="string"){
      return  a[ordenar].localeCompare(b[ordenar])
    }
})

console.log(arrayOrdenado);

}

  const usuarios = [
    { nombre: 'Antonio', edad: 20 },
    { nombre: 'zuan', edad: 23 },
    { nombre: 'Pepe', edad: 12 },
    { nombre: 'Raul', edad: 28 },
    { nombre: 'Paco', edad: 38 },
    { nombre: 'Jason', edad: 56}
  ];

  ordenarObjetos(usuarios, "nombre")