/*
    1.- Necesitamos poder entregar las iniciales del nombre de una persona, considerando únicamente primer nombre, apellido paterno y apellido materno
    input => Israel Salinas Martínez
    output => I. S. M.
    2.- Necesitamos una ruleta de nombres, es decir, de una lista de nombres, debemos poder obtener algún nombre al azar. El nombre seleccionado debe ser eliminado de la lista original para poder volver a usar la ruleta.
    Cuando ya no haya nombres, debe avisar que ya no hay nombres en la lista.
*/


const iniciales = (nombre, aPaterno, aMaterno) => nombre.split("")[0]+aPaterno.split("")[0]+aMaterno.split("")[0]

const eliminacionAlazar = (listaNombres) => {
    console.log("Tu lisa es:", listaNombres)
    do {
        let langListaNom = listaNombres.length-1
        let randonChoice = Math.round((Math.random() * (langListaNom)))
        nombreEliminado = listaNombres.splice(randonChoice, 1)   
        listaNombres = listaNombres  
        console.log("Se elimino: " + nombreEliminado + " la lista quedo: " + listaNombres)
    }while(listaNombres.length > 0)   
    
    return "Ya no hay elementos en la lista"
}



console.log(iniciales("Alejandro", "Torres", "Sanchez"))
console.log(eliminacionAlazar(["Alejandro", "Torres", "Sanchez"]))
