/// external modules ///
import React from 'react';

/// internal modules ///
import getStorage from './getLocalStorage';
import setStorage from './setLocalStorage';

/***************************************
  MAIN
***************************************/
const useStorageState = (key, initValue) => {
  const [state, setState] = React.useState (() => (
    getStorage (key, initValue)
  ));

  React.useEffect (() => {
    setStorage (key, state);
  }, [key, state]);

  return [state, setState];
};

/**************************************/

export default useStorageState;
