/// external modules ///
import React from 'react';

/// internal modules ///
import getStorage from './getSessionStorage';
import setStorage from './setSessionStorage';

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
