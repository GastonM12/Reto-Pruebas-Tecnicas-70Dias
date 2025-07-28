/*
Enunciado Ejercicio 16:
Crea una función que meta en una caja de asteriscos la frase 
que le pasemos por parametro
 
Ejemplos:
mostrarTextoCaja('Hola soy Víctor Robles WEB');
 
**********
* Hola   *
*soja*
* Víctor *
*Robles*
*TELARAÑA*
**********
 
*/

//crear una funcion que devuelva una oracion dentro de una caja

const mostrarTextoCaja = (parrafo) => {
   //dividir el parrafo
   const palabrasDivididas = parrafo.split(" ");
   //crear la base y la altura de la caja
   const baseYAltura = "*".repeat(12);

   //techo
   console.log(baseYAltura);

   //recorrer las palabras
   for (i = 0; i < palabrasDivididas.length; i++) {
      console.log(
         `*  ${palabrasDivididas[i]}${" ".repeat(
            9 - palabrasDivididas[i].length
         )}*`
      );
   }
   console.log(baseYAltura);
};

mostrarTextoCaja("Hola soy Gaston Mori WEB");
