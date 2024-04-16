const canes = [
    {
      nombre: "Rex",
      tipo: "Perro",
      edad: 4,
      vacunado: true,
      direccion: {
        calle: "Calle del Parque",
        numero: 23,
        colonia: "San José",
        codigoPostal: 78900,
      },
    },
    {
      nombre: "Bella",
      tipo: "Perro",
      edad: 6,
      vacunado: true,
      direccion: {
        calle: "Avenida Libertad",
        numero: 56,
        colonia: "El Bosque",
        codigoPostal: 78500,
      },
    },
    {
      nombre: "Max",
      tipo: "Perro",
      edad: 3,
      vacunado: false,
      direccion: {
        calle: "Callejón del Puente",
        numero: 12,
        colonia: "Villa Hermosa",
        codigoPostal: 78850,
      },
    },
    {
      nombre: "Rocky",
      tipo: "Perro",
      edad: 2,
      vacunado: false,
      direccion: {
        calle: "Camino Real",
        numero: 34,
        colonia: "Las Palmas",
        codigoPostal: 78600,
      },
    },
  ];
  

    //  1.- Necesitamos obtener una lista con los objetos de todos los canes, pero su edad debe mostrarse en años perrunos ( 1 año humano = 7 años perrunos )

const listaPerros = (perros) => perros.map((perro) => perro.edad * 7 )

    //  2.- Necesitamos conocer la cantidad de canes que ya estan vacunados

const perrosVacunados = (perros) => {
    let perrosVacunadosCount = 0
    perros.forEach(perro => {
        if (perro.vacunado){
            perrosVacunadosCount ++
        }
    });
    return perrosVacunadosCount
}

    //  3.- Necesitamos una lista que contenga el nombre y la dirección completa de cada perro, en el siguiente formato:
    //      "{nombre}: {calle} #{numero}, {colonia}, {codigoPostal} "

const getNameAndAddres = (list) => {
    const dogAndAddres = list.map ((can) => { 
        const { calle, numero, colonia, codigoPostal } = can.direccion;
        return `La dirección de ${can.nombre}: es la siguiente:  ${calle} ${numero} ${colonia} ${codigoPostal}`;
    });
    return dogAndAddres.join("\n")
    }
        
        
       
    //  4.- Necesitamos saber la edad promedio en años humanos de los canes de la lista

const edadPromedio = (listaDeCanes) => { //Ejercicio 4
    let promedio = 0
    let sumaDeEdades = 0
    listaDeCanes.forEach(edadPorCan => {
        sumaDeEdades += edadPorCan.edad
    });
    promedio = sumaDeEdades / listaDeCanes.length
    return promedio
    }
    //  5.- Necesitamos una nueva lista con todos los objetos de los canes, pero cambiando el valor de la propiedad "vacunado" a "si || no" ( si el valor viene en true, cambiarlo a "Si", si el valor viene en false, cambiarlo a "No")
let cambioDeVacunados = (listaDeCanes) =>{ 

    let listaDeVacunados = listaDeCanes.map((can)=>{
    
        canVacunado = {...can}
        if (canVacunado.vacunado) {
        canVacunado.vacunado = 'Si'
        }else{
        canVacunado.vacunado = 'No'
        }
        return canVacunado
    
    })
    return listaDeVacunados
    
    }

    //  6.- Necesitamos una nueva lista con únicamente el nombre de cada can 
let nombreDelCan = (listaDeCanes) =>{ //Ejercicio 6

    let nuevaLista = listaDeCanes.map((can)=>{
        let nombres = {...can}
        nombres = nombres.nombre
        return nombres
    })
    return nuevaLista
    }
      



  
console.log(listaPerros(canes))
console.log(perrosVacunados(canes))
console.log(getNameAndAddres(canes))
