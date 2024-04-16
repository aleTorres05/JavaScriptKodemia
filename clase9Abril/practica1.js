/*
1.- Se requiere conocer la cantidad de letras de una palabra dentro de la frase. La palabra se debe seleccionar por su posicion.
  ( quiero saber la longitud de la segunda palabra)
  si preguntamos por una posicion que no existe en la frase, devolvemos un mensaje que indique el error
    2.- De la frase, necesitamos eliminar una palabra con base en su posicion, y recibir una nueva frase sin la palabra borrada
    3.- Se requiere eliminar todas las palabras cortas de la frase, considerando que una palabra corta es aquella que tiene 3 caracteres o menos, y debemos obtener la nueva frase sin palabras cortas
[21:29] 4.- Se requiere obtener la frase, pero escrita en orden inve
 */

const phrase = "La mejor forma de predecir el futuro es creándolo"

const longPalabraFrase = (posicionPalabra, frase) => {
    posicionPalabra -= 1
    let palabra = frase.split(" ")[posicionPalabra]
    if (posicionPalabra < frase.split(" ").length) {
         return "Tu palabra es: " + palabra + "con longitud de: " + palabra.length 
    }else {
        return "La posicion esta fuera del alcance"
    }
}


const eliminarPalabra = (frase, posicionPalabra) => {

    let listaPalabras = frase.split(" ")
    listaPalabras.splice([posicionPalabra - 1], 1)
    return listaPalabras.join(" ")
}


const eliminarPalabrasCortas = (frase) => {
    let listaPalabras = frase.split(" ")
    for (i = 0; i < listaPalabras.length; i++){
        if (listaPalabras[i].length <= 3){
            listaPalabras.splice(i, 1)
        }
    }
    return listaPalabras.join(" ")   
}

const fraseInversa = (frase) => frase.split(" ").reverse().join(" ")

console.log(longPalabraFrase(4, phrase))
console.log(eliminarPalabra(phrase, 2))
console.log(eliminarPalabrasCortas(phrase))
console.log(fraseInversa(phrase))
