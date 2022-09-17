import { combineReducers } from 'redux';

import counter from './counter';
import currentUser from './currentUser';
import entryItem from './entryItem';
import controlMatch from './match';
import entryTeam from './team';
import setSort from './sort';

const rootReducer = combineReducers({
  currentUser,
  counter,
  entryItem,
  entryTeam,
  controlMatch,
  setSort,
});

export default rootReducer;
