import { createStore, applyMiddleware } from 'redux';
import { redrawMiddleware } from 'mithril-redux';
import rootReducer from './reducers';

export default function configureStore(initialState) {
  const createModifiedStore = applyMiddleware(
    redrawMiddleware
  )(createStore);
  return createModifiedStore(rootReducer, initialState);
}
