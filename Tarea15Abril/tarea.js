const canes = [
    {
      nombre: "Rex",
      tipo: "Perro",
      edad: 4,
      vacunado: true,
      pais: "México",
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
      pais: "México",
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
      pais: "Colombia",
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
      pais: "Ecuador",
      direccion: {
        calle: "Camino Real",
        numero: 34,
        colonia: "Las Palmas",
        codigoPostal: 78600,
      },
    },
  ];


// 1. Calcular la edad promedio de todos los perros
const edadPromedio = (listaPerros) =>{
    const edadPro = 0
    let sumaEdades = 0;
    listaPerros.forEach(cane => {
        sumaEdades += cane.edad;
    });
    return  sumaEdades / canes.length;
}

// 2. Obtener una lista de perros basados en el país al que pertenecen
const perrosPorPais = (listaPerros, pais) => {
    return listaPerros.filter(cane => cane.pais === pais);
};

// 3. Obtener una lista de los códigos postales de los perros
const codigosPostales = (listaPerros) => listaPerros.map(cane => cane.direccion.codigoPostal);

// 4. Obtener una lista de países a los que pertenecen los perros, sin repetidos
const paisesSinRepetir = (listaPerros) => listaPerros.reduce((accumulator, currentCane) => {
    if (!accumulator.includes(currentCane.pais)) {
        accumulator.push(currentCane.pais);
    }
    return accumulator;
}, []);




console.log("Edad promedio de los perros:", edadPromedio(canes));
console.log("Perros en México:", perrosPorPais(canes, "México"));
console.log("Perros en Colombia:", perrosPorPais(canes, "Colombia"));
console.log("Perros en Ecuador:", perrosPorPais(canes, "Ecuador"));  
console.log("Códigos postales de los perros:", codigosPostales(canes));
console.log("Países sin repetidos:", paisesSinRepetir(canes));

