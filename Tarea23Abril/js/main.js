/*
  1.- Activar el formulario, de tal forma que al dar click en el botón "crear usuario" se genere un objeto con la siguiente forma:
  person = {
    name:"...",
    email:"...",
    password:"..."
  }
  2.- Agregar a la funcionalidad, una lista "persons", de tal forma que al dar click en el boton, la persona creada en el paso anterior, se agregue a esa lista "persons"

   persons = []
  person -> persons

  3.- Agregar la funcionalidad para que cada que agregue una persona nueva, esta se vea reflejada junto con las anteriores en la interfaz de usuario
  */

let personInformation = document.querySelectorAll(".info-person")
let buttonPersonInfo = document.getElementById("createPerson")
let displayedPersonsList = document.getElementById("listPersons")
let personList = []

let getPersonInfo = () => {

    buttonPersonInfo.addEventListener("click", (event) =>{
        event.preventDefault()
        let personObj = {}
        personInformation.forEach((person) => {
          personObj[person.name] = person.value;
          person.value = ""
        })
        personList = [...personList, personObj]
        displayedPersonsList.innerHTML = ""; 
        personList.forEach((person) => {
          let li = document.createElement('li')
          li.innerHTML = `FullName : ${person.FullName}, Email : ${person.Email}, PassWord : ${person.Password}`
          displayedPersonsList.appendChild(li)
        })
    })
}


getPersonInfo()
