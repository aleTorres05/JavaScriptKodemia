let calculoIMC = (peso, estatura) => peso / (estatura/100 * estatura/100)

function determinarEstatusIMC(peso, estatura) {

    let imc = calculoIMC(peso, estatura).toFixed(1)
    let result = null;
    
    switch(true){
        case imc < 18.5 === true:
            result =  "Bajo peso"
            break;
        case 18.5 <= imc && imc< 24.9 === true:
            result =  "Peso saludable"
            break;
        case 25 <= imc &&  imc < 29.9 === true:
            result =  "Sobrepeso"
            break;
        case 30 <= imc === true:
            result =  "Obesidad"
            break;
        case typeof(imc === NaN):
            result =  "Not a Number"
            break;
        default:
            result =  "No se puede hacer nada con el dato ingresado!"
    }

 return result
}

console.log(determinarEstatusIMC(80, 170))  
