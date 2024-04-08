const libro = {
    titulo : "El amor es ciego",
    autor :  "Alejandro Torres",
    genero : "Romance",
    año : 2023,
    editorial : "Cruz libros",
    info_libro : () => "El titulo es: " + libro.titulo + " Autor: " + libro.autor + " Genero: " + libro.genero + " Año: " + libro.año
}

console.log(libro.info_libro())