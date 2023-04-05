
let nombre = "Laura"
let apellidos = "Carretas Perulero"
let estudiante = `${nombre} ${apellidos}`
console.log(estudiante)

let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)

let estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)

let cantidad_letras = estudiante.length
console.log(estudiante.length)


let primera_letra_nombre = nombre[0]
console.log(primera_letra_nombre)

let ultima_letra_apellido = apellidos[apellidos.length - 1]
console.log(ultima_letra_apellido)

let sin_espacios = estudiante.replace(" ","")
console.log(sin_espacios)

let incluye = estudiante.includes(nombre)
console.log(incluye)


