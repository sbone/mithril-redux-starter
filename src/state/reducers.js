import { combineReducers } from 'redux';
import * as Actions from './actions';

function sidebar(state = {}, action) {
  switch (action.type) {
    case Actions.TOGGLE_SIDEBAR:
      return Object.assign({}, state, {
        isOpen: action.payload
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  sidebar
});

export default rootReducer;
