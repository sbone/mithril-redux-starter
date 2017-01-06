import { createStore, applyMiddleware, compose } from 'redux';
import { redrawMiddleware } from 'mithril-redux';
import rootReducer from './reducers';

export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const createModifiedStore = applyMiddleware(redrawMiddleware)(createStore);
  return createModifiedStore(rootReducer, initialState, composeEnhancers());
}
