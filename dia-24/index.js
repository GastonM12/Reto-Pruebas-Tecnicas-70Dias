/*
Enunciado Ejercicio 24:
Crea una función a la cual le pasemos un array de nombres de archivo
y nos devuelva un array con esos mismos archivos, pero si hay alguno
duplicado debe estar númerado con un (número de repeticiones)
como hacen los sistemas operativos.
 
Ejemplos:
renombrarArchivos(["nombre", "apellido", "nombre", "nombre"]);
 
Devuelve: 
[ 'nombre', 'apellido', 'nombre(1)', 'nombre(2)' ]
 
*/

const renombrarArchivos=(ficheros)=>{

    return ficheros.map((fichero,indice)=>{

        //recorrer cada archivo y devolverlo en un nuevo array
        let filtrados = ficheros.slice(0,indice).filter(ficheroFiltro =>fichero === ficheroFiltro)
        //crear un array filtrado que contenga todos los archivos que coninciden
        
        
        //sino hay devolvemos el actual
        return filtrados.length==0? fichero : `${fichero}(${filtrados.length})`
        //si hay repetidos agregamos numeracion
    })


}


console.log(renombrarArchivos(["nombre", "apellido", "nombre", "apelldo","nombre"]));
