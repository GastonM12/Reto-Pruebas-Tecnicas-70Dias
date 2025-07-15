/*
Advertencias:
- En español por fines didácticos, en la vida real usa nombres en inglés.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier idioma.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal.
- Hay muchas soluciones válidas para un mismo ejercicio.
 
Enunciado Ejercicio 1:
Dado un array o un objeto de superhéroes de Marvel, haz un programa que pueda
mostrar la información de un superheroe.
 
Y añade una capacidad de buscar la información de varios superhéroes a la vez.
 
Ejemplo:
MostrarInformacionSuperheroe ('Iron Man');
 
Salida:
Nombre real: Tony Stark
Poderes: Tecnología avanzada, Movilidad aérea
Equipo: Los vengadores
 
Ejemplo 2: 
mostrarInformacionSuperheroes([array de nombres]]);
 
Salida:
Muestra la información de todos los superheroes
 
*/

const infoSuperheroes = {
   "Iron Man": {
      nombreReal: "Tony Stark",
      poderes: ["Tecnología avanzada", "Movilidad aérea"],
      equipo: "Los vengadores",
   },
   "Capitán América": {
      nombreReal: "Steve Rogers",
      poderes: ["Fuerza sobrehumana", "Agilidad y reflejos sobresalientes"],
      equipo: "Los vengadores",
   },
   Thor: {
      nombreReal: "Thor Odinson",
      poderes: ["Mjolnir", "Viento y trueno"],
      equipo: "Los vengadores",
   },
   Spiderman: {
      nombreReal: "Peter Parker",
      poderes: ["Balanceo", "Telarañas pegajosas", "Sentido aracnido"],
      equipo: "Los vengadores",
   },
   Hulk: {
      nombreReal: "Bruce Banner",
      poderes: ["Fuerza sobrehumana", "Invulnerabilidad"],
      equipo: "Los vengadores",
   },
};

// creamos la funcion mostrar heroe

const mostrarInformacionSuperheroe = (superheroe) => {
    console.log(`##### ${superheroe} #####`);
    
   //verificar si el superheroe existe
   if (superheroe in infoSuperheroes) {
      //trer informacion del heroe
      const heroe = infoSuperheroes[superheroe];

      console.log(`Nombre Real = ${heroe.nombreReal}`);
      console.log(`Nombre Real = ${heroe.poderes.join(" - ")}`);
      console.log(`Nombre Real = ${heroe.equipo}`);
   } else {
      console.log("El heroe no existe");
   }
};

//funcion mostrar varios superheroes al mismo tiempo

const mostrarInformacionSuperheroes=(superheroes)=>{
    //verificar si el array no esta vacio
    if(superheroes.length >= 1){
     //mostrar heroes
     superheroes.forEach(heroe => {
        mostrarInformacionSuperheroe(heroe)
     });
    }else{
        console.log("Por favor ingrese un superheroe");
        
    }
}
mostrarInformacionSuperheroes(["Hulk","Iron Man","Spiderman"])