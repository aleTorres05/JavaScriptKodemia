let data = [
    ["Israel", "Salinas", 18],
    ["Charles", "Silva", 27],
    ["Naomi", "Lopez", 27],
    ["David", "Moranchel", 28],
  ];

    //  1. Necesitamos una lista con los nombres completos de las personas que se encuentran en la data

const listFullNames = (personList) => personList.map(person => `${person[0]} ${person[1]}`)

    //  2.- Necesitamos saber cual es la mayor y la menor edad de las personas en la lista
    const encontrarMayorMenorEdad = (datos) => {
        let edades = datos.map(persona => persona[2]);
    
        let mayorEdad = edades[0];
        let menorEdad = edades[0];
    
        edades.forEach(edad => {
            if (edad > mayorEdad) {
                mayorEdad = edad;
            }
            if (edad < menorEdad) {
                menorEdad = edad;
            }
        });
    
        return {
            mayor: mayorEdad,
            menor: menorEdad
        };
    };
    /* 3.- Necesitamos reestructurar la data para que quede de la siguiente forma:
  
      let restructuredData = [
          {
              name:
              lastname:
              age
          }
      ]
  */

const reestructurarData = (listaPersona) => listaPersona.reduce((accum, current) => {
    return [
        ...accum,
        {
        "Name" : current[0],
        "LastName" : current[1],
        "Age" : current[2]
    }
    ,]
}, [])



 console.log(listFullNames(data))
 console.log(encontrarMayorMenorEdad(data))
 console.log(reestructurarData(data))



