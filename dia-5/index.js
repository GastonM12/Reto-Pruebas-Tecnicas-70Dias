/*
Enunciado Ejercicio 5:
Dado un array de personas con nombres y apellidos
crear una función para ordenar el array por los apellidos
en orden alfabético
 
Ejemplo:
ordenarPorApellidos([
    "Víctor Robles",
 "Antonio Alcántara",
    "Al Pacino",
    "Robert DeNiro",
    "Brad Pitt",
    "Sylvester Stallone"
]);  */

//Crear una funcion ordenar por apellidos

const ordenarPorApellidos = (nombreCompleto) => {
   //array de apellidos

   const apellidos = [];

   //recorrer el array y separar el apellido

   for (i = 0; i < nombreCompleto.length; i++) {
      //agregar el apellido al array
      apellidos.push(nombreCompleto[i].split(" ")[1]);
   }
   //retornar el array de apellidos ordenado

   return console.log(apellidos.sort())
};

ordenarPorApellidos([
   "Víctor Robles",
   "Antonio Alcántara",
   "Al Pacino",
   "Robert DeNiro",
   "Brad Pitt",
   "Sylvester Stallone",
]);
