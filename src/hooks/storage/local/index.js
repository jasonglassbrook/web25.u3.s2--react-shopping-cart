/*******************************************************************************
  hooks/storage/local
*******************************************************************************/

/*//////////////////////////////////////
  exports : qualified short-names
//////////////////////////////////////*/
import get from './getLocalStorage';
import set from './setLocalStorage';
import useState from './useLocalStorageState';

export default {
  get,
  set,
  useState,
};

/*//////////////////////////////////////
  exports : unqualified full-names
//////////////////////////////////////*/
export {default as getLocalStorage} from './getLocalStorage';
export {default as setLocalStorage} from './setLocalStorage';
export {default as useLocalStorageState} from './useLocalStorageState';
