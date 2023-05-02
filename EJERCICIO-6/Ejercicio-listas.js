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
    { titulo: "Titanic", director: "James Cameron", fecha: "8 de Enero de 1998" },
    { titulo: "Soy Leyenda", director: "Francis Lawrence", fecha: "19 de Diciebre de 2007" },
    { titulo: "Lo imposible", director: "Juan Antonio Bayona", fecha: "11 de Octubre 2012" },
]
console.log(peliculasFavoritas)

const peliculasPosteriores = peliculasFavoritas.filter(obj => obj.fecha > "1 de Enero 2010")
console.log(peliculasPosteriores)

const listaDirectores = peliculasFavoritas.map((valor, i) => `${i + 1} - ${valor.director}`)
console.log(listaDirectores)

const listaTitulos = peliculasFavoritas.map((valor, i) => `${i} _ ${valor.titulo}`)
console.log(listaTitulos)

const listaConcat = listaDirectores.concat(listaTitulos)
console.log(listaConcat)

const listaConcat2 = [...listaDirectores,...listaTitulos]
console.log(listaConcat2)



