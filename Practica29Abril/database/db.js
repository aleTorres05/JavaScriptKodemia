const saveEntry = async (entryObject) => {
  let response = await fetch(
    `https://javascript-g33-default-rtdb.firebaseio.com/blogEntries/.json`,
    {
      method: "POST",
      body: JSON.stringify(entryObject),
    }
  );

  let data = await response.json();
};

const getBlogs = async () => {
  /*creamos la petición*/
  /*Esperamos a que la petición se cumpla*/
  let response = await fetch(
    "https://javascript-g33-default-rtdb.firebaseio.com/blogEntries/.json"
  );

  /*Desempaquetamos el contenido de la respuesta, para extraer la información con la que vamos a trabajar*/
  let blogs = await response.json();

  let keys = Object.keys(blogs);

  /*Aquí obtendremos el array listo para trabajar con él*/
  let blogsArray = keys.map((key) => {
    return { ...blogs[key], key };
  });
  return blogsArray;
};

export { getBlogs, saveEntry };