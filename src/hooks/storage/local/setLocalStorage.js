/***************************************
  MAIN
***************************************/
const setLocalStorage = (key, value) => {
  try {
    window.localStorage.setItem (key, JSON.stringify (value));
  }
  catch (error) {
    console.error ('setLocalStorage', error);
  }
}

/**************************************/

export default setLocalStorage;
