const phrase = "La mejor forma de predecir el futuro es creándolo"


/*
se requiere:
    1.- Saber cuántos caracteres tiene la frase
    2.- Saber cuántas letras tiene la frase
    3.- Saber cuántas palabras tiene la frase
    4.- Obtener la misma frase pero en mayúsculas
    5.- Obtener la misma frase pero con todas las letras "a" reemplazadas por un "4"
*/


console.log(phrase.length)
console.log(phrase.replaceAll(" ", "").length)
console.log((phrase.split(" ")).length)
console.log(phrase.toUpperCase())
console.log(phrase.replaceAll("a", 4))
