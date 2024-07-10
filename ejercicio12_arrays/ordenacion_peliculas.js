/*
Película:
- Título
- Duración
- Género
- Clasificación (1-5)

- Creamos 3 instancias (objetos). Dos de ellas son del género ¿Terror?
- Obtener las películas del género ¿Terror? ordenadas por clasificación
*/
class Pelicula {
    constructor(titulo, duracion, genero, clasificacion)
    {
        this.titulo = titulo;
        this.duracion = duracion;
        this.genero = genero;
        this.clasificacion = clasificacion;
    }
}
let alien = new Pelicula("Alien", 98, "Terror", 5);
let lalaland = new Pelicula("La la land", 110, "Musical", 4);
let posesioninfernal = new Pelicula("Posesión infernal", 89, "Terror", 3);

let pelis = [alien, lalaland, posesioninfernal];

let pelisTerror = pelis
    .filter((pelicula)=>pelicula.genero==="Terror")
    .sort((p1,p2)=>p1.clasificacion-p2.clasificacion);
console.log(pelisTerror);