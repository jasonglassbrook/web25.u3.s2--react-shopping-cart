/***************************************
  MAIN
***************************************/
const setSessionStorage = (key, value) => {
  try {
    window.sessionStorage.setItem (key, JSON.stringify (value));
  }
  catch (error) {
    console.error ('setSessionStorage', error);
  }
}

/**************************************/

export default setSessionStorage;
