// 1.
const { table, Console } = require("console");
const jsonHelper = require("./JsonHelper");

const peliculas = jsonHelper.leerJson("peliculas");
// 2.
const gestionDePeliculas = {
  peliculas: peliculas,

  listarPeliculas: function (arrayPeliculas) {
    return arrayPeliculas.forEach((pelicula) => {
      console.log(
        "titulo: " +
          pelicula.titulo +
          " de: " +
          pelicula.director +
          "." +
          " Duracion: " +
          pelicula.duracionEnMinutos +
          " minutos" +
          (pelicula.ganoOscar ? " con premios" : " sin premios") +
          "(" +
          pelicula.calificacionIMDB +
          "/10 en IMBD)"
      );
    });
  },

  buscarPorId: function (number) {
    return this.peliculas.find((pelicula) => pelicula.id === number);
  },

  peliculasNoPremiadas: function () {
    return this.peliculas.filter((pelicula) => pelicula.ganoOscar === false);
  },
  filtrarPorCalificacion: function (calificacionMin, calificacionMax) {
    return this.peliculas.filter((pelicula) => pelicula.calificacionIMDB >= calificacionMin && pelicula.calificacionIMDB <= calificacionMax);
  },

  ordenarPorDuracion: function (arrayPeliculas) {
    return arrayPeliculas.sort(
      (duracion1, duracion2) => duracion2.duracionEnMinutos - duracion1.duracionEnMinutos);
  },
  duracionPromedio: function(){
    const suma = this.peliculas.reduce((acumulador, minutos) => acumulador + minutos.duracionEnMinutos, 0)
    const promedio = suma/ this.peliculas.length;
    return "La duracion promedio de las peliculas es de " + promedio + " minutos."
    
  },
  premiarPeliculaPorId :function(number){
    const buscarId =this.buscarPorId (number).ganoOscar = true
    this.peliculas.sort((a,b) => a.id -b.id )
    jsonHelper.escribirJson("peliculas", this.peliculas)
    return this.buscarPorId(number)
  },
  eliminarPorId: function (number) {
    const buscarId = this.buscarPorId(number)
    this.peliculas.splice((buscarId.id -1),1)
    jsonHelper.escribirJson("peliculas", this.peliculas)
    return buscarId
  },

premiarPeliculaPorTitulo: function (Titulo){
  this.peliculas.find (peli =>peli.titulo === Titulo).ganoOscar = true
  jsonHelper.escribirJson("peliculas", this.peliculas)
  return this.peliculas.find (peli =>peli.titulo === Titulo)
},
agregarPorQueSi: function (){
  const peliNueva = {
    "id": 11,
    "titulo": "tu Idiot Bro",
    "director": "Jesse Pere",
    "genero": "Com",
    "anio": 2012,
    "duracionEnMinutos": 94,
    "ganoOscar": false,
    "calificacionIMDB": 6.25
  }

this.peliculas.splice(10, 0, peliNueva);
jsonHelper.escribirJson("peliculas", this.peliculas)
return this.peliculas;

}



};

/******************************/
/* Ejecución de las consignas */
/******************************/

//gestionDePeliculas.listarPeliculas(gestionDePeliculas.peliculas)

/* console.log(gestionDePeliculas.buscarPorId(1))

console.log(gestionDePeliculas.peliculasNoPremiadas())

console.table(gestionDePeliculas.filtrarPorCalificacion(6,9))

console.table(gestionDePeliculas.ordenarPorDuracion(gestionDePeliculas.peliculas))

console.log(gestionDePeliculas.duracionPromedio)

console.log(gestionDePeliculas.duracionPromedio())

console.log(gestionDePeliculas.premiarPeliculaPorId(1))

console.log(gestionDePeliculas.eliminarPorId(5))

console.log(gestionDePeliculas.premiarPeliculaPorTitulo("Tom and Huck")) */

console.table(gestionDePeliculas.agregarPorQueSi())