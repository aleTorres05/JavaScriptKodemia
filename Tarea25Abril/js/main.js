
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

  let createPersonButton = document.getElementById("create-person");

  let persons = [];
  
  createPersonButton.addEventListener("click", (event) => {
    event.preventDefault();
    let fields = document.querySelectorAll("#person-form input");  
    let personObject = {};
  
    fields.forEach((field) => {
      personObject[field.name] = field.value;
    });
    
    postKoder(personObject)
    printPersonsList("persons-list");
  });

  const postKoder = async (koderObject) => {
    let response = await fetch(
      "https://javascript-g33-default-rtdb.firebaseio.com/koders/.json",
      {
        method: "POST",
        body: JSON.stringify(koderObject),
      }
    );
    let data = await response.json();
    alert(data)
  };
  
  const getKoders = async () => {
    let response = await fetch(
      "https://javascript-g33-default-rtdb.firebaseio.com/koders/.json"
      );

    let koders = await response.json();
    let keys = Object.keys(koders);
    let kodersArray = keys.map((key) => {
      return { ...koders[key], key };
    });
    return kodersArray
      
  }
  const createPersonItem = (koders) => {
    let { fullname, email } = koders;
    let personListItem = document.createElement("li");
    personListItem.classList.add("list-group-item");
    let personNameText = document.createTextNode(`${fullname}: ${email}`);
    personListItem.append(personNameText);
    return personListItem;
  };
  
  const printPersonsList = async (wrapperId) => {
    let kodersList = await getKoders()
    let wrapper = document.getElementById(wrapperId);
  
    while (wrapper.firstChild) {
      wrapper.removeChild(wrapper.firstChild);
    }
    kodersList.forEach((koder) => wrapper.append(createPersonItem(koder)));
  };
  