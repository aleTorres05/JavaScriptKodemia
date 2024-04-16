const users = [
    {
      name: "Alice",
      lastname: "Johnson",
      age: 28,
      gender: "Female",
      country: "USA",
    },
    {
      name: "Bob",
      lastname: "Smith",
      age: 32,
      gender: "Male",
      country: "Canada",
    },
    {
      name: "Carlos",
      lastname: "Gomez",
      age: 24,
      gender: "Male",
      country: "Mexico",
    },
    {
      name: "Daniela",
      lastname: "Martinez",
      age: 30,
      gender: "Female",
      country: "Colombia",
    },
    {
      name: "Erik",
      lastname: "Svensson",
      age: 29,
      gender: "Male",
      country: "Sweden",
    },
    {
      name: "Fiona",
      lastname: "O'Donnell",
      age: 35,
      gender: "Female",
      country: "Ireland",
    },
    {
      name: "Gautam",
      lastname: "Patel",
      age: 27,
      gender: "Male",
      country: "India",
    },
    {
      name: "Hana",
      lastname: "Kim",
      age: 22,
      gender: "Female",
      country: "South Korea",
    },
    {
      name: "Ivan",
      lastname: "Petrov",
      age: 34,
      gender: "Male",
      country: "Russia",
    },
    {
      name: "Julia",
      lastname: "Santos",
      age: 25,
      gender: "Female",
      country: "Brazil",
    },
  ];
  
  
    //  1.- Necesitamos una lista con únicamente los nombres completos de cada usuario
const listFullName = (users) => {
  listNames = []
  for(let i = 0; i < users.length; i ++){
    listNames.push(users[i].name)
  }
  return listNames

}



    //  2.- Necesitamos una lista con únicamente aquellos usuarios con género "Male"
const maleLastName = (users) => {
  listNames = []
  for(let i = 0; i < users.length; i ++){
    if(users[i].gender === "Male"){
      listNames.push(users[i].lastname)
    }
  }
  return listNames
}


    //  3.- Necesitamos una lista con únicamente aquellos usuarios con género "Female"

const femaleLastName = (users) => {
  listNames = []
  for(let i = 0; i < users.length; i ++){
    if(users[i].gender === "Female"){
      listNames.push(users[i].lastname)
    }
  }
  return listNames
}

    //  4.- Necesitamos saber la edad promedio de los usuarios

const averageAge = (users) => {
  sumAge = 0
  for(let i = 0; i < users.length; i ++){
    sumAge += users[i].age
  }
  return sumAge/users.length
}

    //  5.- Necesitamos saber la mayor edad
const oldest = (users) => {
  let oldMember = 0 

  for(let i = 0; i < users.length; i ++){
    if (users[i].age > oldMember){
      oldMember = [users[i].age]
    }
  }
  return oldMember
}

    //  6.- Necesitamos saber la menor edad

const youngest = (users) => {
  for(let i = 0; i < users.length; i ++){
    exYougest = users[i].age
    if (users[i].age <= exYougest){
      youngMember = [users[i].age]
    }
  }
  return youngMember
}


console.log(listFullName(users))
console.log(maleLastName(users))
console.log(femaleLastName(users))
console.log(averageAge(users))
console.log(oldest(users))
console.log(youngest(users))
