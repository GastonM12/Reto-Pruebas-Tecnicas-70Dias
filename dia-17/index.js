/*
Enunciado Ejercicio 17:
Dada un array de frases, contar el número de palabras que tiene
 
Ejemplos:
contarPalabras([
                "Hola, soy Gaston Mori WEB",
                "Me gusta programar",
                "Y soy desarrollador web"
            ]);
 
Entrada: 12
 
*/

//crear una funcion que cuente la cantidad de palabras que hay dentro de un array de string

const contarPalabras = (arrayDePalabras) => {
   
    //separar las palabras
   const palabras = arrayDePalabras.map((oracion) => oracion.split(" "));
   
   //agregar una variable contador de palabras
   let contadorDePalabras = 0;
   
   //recorrer las palabras
   palabras.forEach(oracion => {
      contadorDePalabras += oracion.length
   });

   console.log(contadorDePalabras);
   
};

contarPalabras([
   "Hola, soy Gaston Mori WEB",
   "Me gusta programar",
   "Y soy desarrollador web",
]);
