// Enunciado Ejercicio 2:
// Dada una ruta absoluta de un archivo (de un sistema linux o basado en unix)
// crear una función que la simplifique
// Ejemplo:
// simplificarRuta("/home/"); Salida: /home
// simplificarRuta("/x/./y/.. /.. /z/"); Salida: /z
// simplificarRuta("/.. /"); Salida: /
// simplificarRuta("/home//pruebas/"); Salida: /home/pruebas

//Funcion simplificadora

const simplificarRuta = (ruta) => {
   //Verificar si la ruta es "/." devolvera solo /
   if (ruta === "/.") {
      return console.log("/");
   }
   //array para carpetas
   const rutaLimpia = [];
   //Seperar la ruta por carpeta
   const carpetasDivididas = ruta.split("/");

   //recorrer el arrglo de carpetas
   for (carpeta of carpetasDivididas) {
      //verificar si contiene ".."
      if (carpeta === "..") {
         //eliminar la carpeta anterior
         rutaLimpia.pop();
      }
      //verificar si la carpeta es un string vacio o "."
      else if (carpeta !== "." && carpeta !== "") {
         rutaLimpia.push(carpeta);
      }
   }
   console.log("/" + rutaLimpia.join("/"));
};
simplificarRuta("/../");
