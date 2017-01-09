import { combineReducers } from 'redux';
import * as Actions from './actions';

function sidebar_open(state = {}, action) {
  switch (action.type) {
    case Actions.TOGGLE_SIDEBAR:
      return action.value;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  sidebar_open
});

export default rootReducer;