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

export { saveEntry };
