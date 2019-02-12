import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './rootSaga';
import { user } from './user';
import { info, categories, category } from './categories';
import { error } from './status';
import { products, product } from './products';

const rootReducers = combineReducers({
  user,
  info,
  error,
  products,
  product,
  categories,
  category
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

export const runSaga = () => sagaMiddleware.run(rootSaga);

export default store;
