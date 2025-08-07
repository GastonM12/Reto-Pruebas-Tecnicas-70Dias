/*
Enunciado Ejercicio 25:
Crea una función a la cual le pasemos un array de nombres de archivo
y nos devuelva un array con esos mismos archivos, pero si hay alguno
duplicado debe estar númerado con un (número de repeticiones)
como hacen los sistemas operativos.
 
Ejemplos:
renombrarArchivos(["nombre.jpg", "apellido.doc", "nombre.png", "nombre.png", "nombre.jpg", "nombre.jpg"]);
 
Devuelve: 
[ 'nombre.jpg', 'apellido.doc', 'nombre.png', 'nombre(1).png', 'nombre(1).jpg', 'nombre(2).jpg']
 
*/

//crear una funcion que no repita los archivos con extencion

const renombrarArchivos = (ficheros) => {
   return ficheros.map((fichero, indice) => {
      let filtrados = ficheros
         .slice(0, indice)
         .filter((ficheroFiltro) => fichero === ficheroFiltro);

      let resultado = fichero;

      if (filtrados.length !== 0) {
         let ficheroPartido = fichero.split(".");

         resultado = `${ficheroPartido[0]}(${filtrados.length}).${ficheroPartido[1]}`;
      }
      return resultado;
   });
};

console.log(renombrarArchivos(["nombre.jpg", "apellido.doc", "nombre.png", "nombre.png", "nombre.jpg", "nombre.jpg"]));
