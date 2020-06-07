import { combineReducers } from 'redux';
import { countReducer } from './count';

export const reducers = combineReducers({
  count: countReducer,
});
