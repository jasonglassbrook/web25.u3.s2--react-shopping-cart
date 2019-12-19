/// tools ///
import { is } from 'tools/iffy';

/***************************************
  MAIN
***************************************/
const getSessionStorage = (key, fallback) => {
  let value = fallback;

  try {
    const item = window.sessionStorage.getItem (key);
    value = is (item) ? JSON.parse(item) : fallback;
  }
  catch (error) {
    console.error ('getSessionStorage', error);
  }

  return (value);
}

/**************************************/

export default getSessionStorage;
