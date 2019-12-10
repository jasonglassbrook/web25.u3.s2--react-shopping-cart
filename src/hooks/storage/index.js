/*******************************************************************************
  hooks/storage
*******************************************************************************/

/*//////////////////////////////////////
  exports : qualified short-names
//////////////////////////////////////*/
import local from './local';
import session from './session';

export default {
  local,
  session,
};

/*//////////////////////////////////////
  exports : unqualified full-names
//////////////////////////////////////*/
export {default as local} from './local';
export {default as session} from './session';
