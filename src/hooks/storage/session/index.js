/*******************************************************************************
  hooks/storage/session
*******************************************************************************/

/*//////////////////////////////////////
  exports : qualified short-names
//////////////////////////////////////*/
import get from './getSessionStorage';
import set from './setSessionStorage';
import useState from './useSessionStorageState';

export default {
  get,
  set,
  useState,
};

/*//////////////////////////////////////
  exports : unqualified full-names
//////////////////////////////////////*/
export {default as getSessionStorage} from './getSessionStorage';
export {default as setSessionStorage} from './setSessionStorage';
export {default as useSessionStorageState} from './useSessionStorageState';
