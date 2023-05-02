var listaCompra= [
    "Huevos",
    "Leche",
    "Ázucar",
    "Pan",
    "Pollo",
]
console.log(listaCompra)

listaCompra.push("Aceite de Girasol")
console.log(listaCompra) 

listaCompra.pop()
console.log(listaCompra)

let peliculasFavoritas = [
    { titulo: "Titanic", director: "James Cameron", fecha: new Date( 1998, 0, 8) },
    { titulo: "Soy Leyenda", director: "Francis Lawrence", fecha: new Date (2007, 11, 19) },
    { titulo: "Lo imposible", director: "Juan Antonio Bayona", fecha: new Date ( 2012, 9, 11)},
]
console.log(peliculasFavoritas)

const peliculasPosteriores = peliculasFavoritas.filter(pelicula => pelicula.fecha > new Date (2010, 0, 1))
console.log(peliculasPosteriores)

const listaDirectores = peliculasFavoritas.map(pelicula => {
    return pelicula.director
})
console.log(listaDirectores)

const listaTitulos = peliculasFavoritas.map(pelicula => {
    return pelicula.titulo
})
console.log(listaTitulos)

const listaConcat = listaDirectores.concat(listaTitulos)
console.log(listaConcat)

const listaConcat2 = [...listaDirectores,...listaTitulos]
console.log(listaConcat2)



